import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import todoStore from '../../store/TodoStore'
import userStore from '../../store/UserStore'

import { Modal } from '../../components/Modal'
import { TodoList } from '../../components/TodoList/TodoList'

import { statusTypes } from '../../types/types'
import styles from './TodoPage.styles.module.scss'

export const TodoPage = observer(() => {

	const navigate = useNavigate();

	const todos = todoStore.todos;

	const [openModal, setOpenModal] = useState(false)

	const handleFetchReq = (status: statusTypes) => {
		todoStore.fetchTodos(status);
	}

	const handleRedirect = () => {
		if (!userStore.isAuth) {
			return navigate('/auth')
		}
		return;
	}

	const handleLogout = () => {
		userStore.logout()
		return navigate('/auth')
	}

	useEffect(() => {
		handleRedirect();
		todoStore.fetchTodos('all');
	}, []);

	return (
		<main className={styles['todo-page']}>
			<small>You are signed as: {userStore.user?.username}</small>
			<button onClick={handleLogout} className={styles['auth-button']}>Logout</button>
			<Modal open={openModal} setOpen={setOpenModal} />
			<div className={styles['todo-menu']}>
				<div className={styles['todo-add']}>
					<button className={styles['todo-add__button']} onClick={() => setOpenModal(!openModal)}>Add ToDo</button>
				</div>
				<div className={styles['todo-filters']}>
					<button className={styles['todo-filters__button']} onClick={() => handleFetchReq('all')}>All </button>
					<button className={styles['todo-filters__button']} onClick={() => handleFetchReq('done')}>Done </button>
					<button className={styles['todo-filters__button']} onClick={() => handleFetchReq('undone')}>Undone</button>
				</div>
			</div>
			<TodoList todos={todos} />
		</main>
	)
})
