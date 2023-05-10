import todoStore from "../../store/TodoStore";
import { statusTypes } from "../../types/types";
import styles from './Filter.styles.module.scss';

export const Filter = () => {

	const handleFetchReq = (status: statusTypes) => {
		todoStore.fetchTodos(status);
	}

	return (
		<div className={styles['todo-filters']}>
			<button className={styles['todo-filters__button']} onClick={() => handleFetchReq('all')}>All </button>
			<button className={styles['todo-filters__button']} onClick={() => handleFetchReq('done')}>Done </button>
			<button className={styles['todo-filters__button']} onClick={() => handleFetchReq('undone')}>Undone</button>
		</div>
	)
}
