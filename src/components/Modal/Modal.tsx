import React, { useState } from 'react';

import TodoStore from '../../store/TodoStore';
import styles from './Modal.styles.module.scss';


interface modalProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<modalProps> = ({ open, setOpen }) => {

	const [inputValue, setInputValue] = useState('')

	const addTodo = () => {
		setOpen(false)
		TodoStore.addTodo({ done: false, title: inputValue, id: Date.now() })
		setInputValue('');
	}

	const closeModal = () => {
		setOpen(false)
	}

	if (!open) return null;

	return (
		//Вместо онклика использую маусдаун, т.к так нельзя случайно закрыть модалку если зажать на модалке и отпустить вне ее
		<div className={styles['overlay']} onMouseDown={closeModal}>
			<div className={styles['modal-container']} onMouseDown={(e) => e.stopPropagation()}>
				<form>
					<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='todo text' type='text'></input>
					<button onClick={addTodo}>Add ToDo</button>
				</form>
			</div>
		</div>
	)
}
