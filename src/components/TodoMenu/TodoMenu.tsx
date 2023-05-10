import React, { useState } from 'react';
import todoStore from '../../store/TodoStore';
import { statusTypes } from '../../types/types';
import styles from './TodoMenu.styles.module.scss';
import { Filter } from '../Filter';

interface TodoMenuProps {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
	openModal: boolean;
}


export const TodoMenu: React.FC<TodoMenuProps> = ({ setOpenModal, openModal }) => {

	return (
		<div className={styles['todo-menu']}>
			<div className={styles['todo-add']}>
				<button className={styles['todo-add__button']} onClick={() => setOpenModal(!openModal)}>Add ToDo</button>
			</div>
			<Filter />
		</div>
	)
}
