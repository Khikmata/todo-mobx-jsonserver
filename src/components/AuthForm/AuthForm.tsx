import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import userStore from '../../store/UserStore'
import styles from './AuthForm.styles.module.scss'




export const AuthForm = observer(() => {

	const navigate = useNavigate();

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5001/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});
			if (!response.ok) {
				console.log('Данные неверны')
			}
			if (response.ok) {
				const data = await response.json();
				userStore.login(data)
				navigate('/', { replace: true });
			}
		} catch (error) {
			alert(error);
		}
	}

	return (
		<div className={styles['auth-modal']}>
			<p>Log In</p>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Username:
					<input onChange={(e) => setUsername(e.target.value)}
						placeholder='username'
						value={username}
						type='text'
						className={styles['auth-username']}
						minLength={3}
					/>
				</label>
				<label>
					Password:
					<input
						onChange={(e) => setPassword(e.target.value)}
						placeholder='password'
						value={password}
						type='password'
						className={styles['auth-password']}
						minLength={4}
					/>
				</label>
				<button className={styles['auth-submit']}>LOGIN</button>
			</form>
		</div>
	)
})
