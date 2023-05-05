import { observer } from 'mobx-react-lite';
import { ITodo } from '../../types/types';
import { Todo } from '../Todo/Todo';

interface TodoListProps {
	todos: ITodo[];
}


export const TodoList = observer(({ todos }: TodoListProps) => {

	return (
		<>
			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</>
	)
});