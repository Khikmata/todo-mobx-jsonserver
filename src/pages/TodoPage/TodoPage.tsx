import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import todoStore from '../../store/TodoStore'
import userStore from '../../store/UserStore'

import { TodoList } from '../../components/TodoList/TodoList'
import { Modal } from '../../components/TodoModal'

import { TodoMenu } from '../../components/TodoMenu'
import styles from './TodoPage.styles.module.scss'

export const TodoPage = observer(() => {

	const navigate = useNavigate();

	const todos = todoStore.todos;

	const [openModal, setOpenModal] = useState(false)

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
			<TodoMenu openModal={openModal} setOpenModal={setOpenModal} />
			<TodoList todos={todos} />
		</main>
	)
})
