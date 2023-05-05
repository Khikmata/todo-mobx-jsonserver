export interface ITodo {
	id: number;
	title: string;
	done: boolean;
}

export interface IUser {
	username: string;
	password: string;
}

export type statusTypes = 'all' | 'done' | 'undone';