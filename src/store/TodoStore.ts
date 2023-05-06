
import { action, makeObservable, observable } from 'mobx';

import apiReqs from '../api';
import { ITodo, statusTypes } from '../types/types';


class TodoStore {
	todos: ITodo[] = [];

	constructor() {
		makeObservable(this, {
			todos: observable,
			addTodo: action,
			toggleDoneTodo: action,
			deleteTodo: action,
			fetchTodos: action,
		});
	}

	async fetchTodos(done: statusTypes) {
		const definePath = () => {
			switch (done) {
				case 'all':
					return ''
				case 'done':
					return '?done=true'
				case 'undone':
					return '?done=false'
			}
		}
		const todos = await apiReqs.get<ITodo[]>(`todos${definePath()}`);
		this.todos = todos;
	}

	async addTodo(todo: ITodo) {
		const addedTodo = await apiReqs.post<ITodo>('todos', todo);
		this.todos.push(addedTodo);
	}

	async toggleDoneTodo(todo: ITodo) {
		const updatedTodo = await apiReqs.get<ITodo>(`todos/${todo.id}`);
		this.todos = this.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
	}
	async deleteTodo(id: number) {
		await apiReqs.del(`todos/${id}`);
		this.todos = this.todos.filter(t => t.id !== id);
	}
}

const todoStore = new TodoStore();

export default todoStore;