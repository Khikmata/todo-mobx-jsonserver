import { ITodo } from '../types/types';


//
const API_DOMAIN = 'http://localhost:5001/';

interface ApiConfig {
	method: string;
	body?: string;
	headers?: { [key: string]: string };
}

//Отправка HTTP запроса с помощью фетча
async function performRequest<T, D = undefined>(
	url: string,
	data?: D,
	config?: ApiConfig
): Promise<T> {
	const response = await fetch(`${API_DOMAIN}${url}`, {
		...config,
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			...(config?.headers || {}),
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error: ${response.status}`);
	}

	return await response.json();
}

async function get<T>(url: string): Promise<T> {
	return await performRequest<T>(url);
}

async function post<T>(url: string, data: ITodo): Promise<T> {
	return await performRequest<T, ITodo>(url, data, {
		method: 'POST',
	});
}

async function put<T>(url: string, data: ITodo): Promise<T> {
	return await performRequest<T, ITodo>(url, data, {
		method: 'PUT',
	});
}

async function del<T>(url: string): Promise<T> {
	return await performRequest<T>(url, undefined, {
		method: 'DELETE',
	});
}

const ApiRequests = {
	get,
	post,
	put,
	del,
};

export default ApiRequests;
