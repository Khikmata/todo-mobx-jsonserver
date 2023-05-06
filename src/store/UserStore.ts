import { makeAutoObservable } from 'mobx';
import { IUser } from "../types/types";

class UserStore {

	user: IUser | null = null;
	isAuth: boolean = false;

	constructor() {

		makeAutoObservable(this);

		const isAuth = localStorage.getItem('isAuth');
		if (isAuth === 'true') {
			this.isAuth = true;
		}
	}

	login(data: IUser) {

		this.user = data;
		localStorage.setItem('isAuth', 'true');
		this.isAuth = true;
	}

	logout() {
		localStorage.removeItem('isAuth');
		this.isAuth = false;
	}
}

const userStore = new UserStore();

export default userStore;