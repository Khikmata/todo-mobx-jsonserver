import React from 'react';
import { Filter } from '../Filter';
import styles from './TodoMenu.styles.module.scss';

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
