import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type PostData = {
	title: string;
	body: string;
}

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	const data: PostData = {
		title: String(formData.get('title')),
		body: String(formData.get('body')),
	}

	await fetch('http://localhost:3000/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	}).then(res => {
		if (res.status === 200) {
			return res.json();
		} else {
			throw new Error('Login failed');
		}
	}
	).then(json => {
		console.log(json);
	}
	).catch(err => {
		console.log(err);
	}
	);

};