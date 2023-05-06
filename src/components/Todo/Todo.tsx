import { observer } from 'mobx-react-lite';
import todoStore from '../../store/TodoStore';
import { ITodo } from '../../types/types';
import styles from './Todo.styles.module.scss';




export const Todo = observer((todo: ITodo) => {

	const handleDone = (todo: ITodo) => {
		todoStore.toggleDoneTodo({ id: todo.id, title: todo.title, done: !todo.done })
	}

	const handleDelete = (id: number) => {
		todoStore.deleteTodo(id)
	}

	return (
		<div className={[styles['todo'], [styles[todo.done ? 'active' : '']]].join(' ')}>
			<p>{todo.title}</p>
			<div className={styles['todo-buttons']}>
				<button
					onClick={() => handleDone(todo)}
					className={styles['todo-buttons__btn']}>
					✔
				</button>
				<button onClick={() => handleDelete(todo.id)} className={styles['todo-buttons__btn']}>
					X
				</button>
			</div>
		</div>
	)
},)
