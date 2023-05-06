import React, { useState } from 'react';
import todoStore from '../../store/TodoStore';
import { statusTypes } from '../../types/types';
import styles from './TodoMenu.styles.module.scss';

interface TodoMenuProps {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
	openModal: boolean;
}


export const TodoMenu: React.FC<TodoMenuProps> = ({ setOpenModal, openModal }) => {


	const handleFetchReq = (status: statusTypes) => {
		todoStore.fetchTodos(status);
	}

	return (
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
	)
}
