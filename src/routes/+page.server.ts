import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { Post } from "../lib/types";
import type { PageServerLoad } from "./$types";
import checkSession from "$lib/checkSession";

export const load = (async ({ cookies }) => {

	const session = cookies.get("_sma_session");

	if (!session)
		throw redirect(301, "/login");

	if (!await checkSession(session))
		throw redirect(301, "/logout");

	const username = cookies.get("username") as string;
	const loggedIn = true;
	const posts: Post[] = []


	return { posts: posts, loggedIn: loggedIn, username: username };

}) satisfies PageServerLoad;

export const actions = {
	createPost: async ({ request, cookies }) => {
		const formData = await request.formData();
		const body = String(formData.get("body"));

		const session = String(cookies.get("_sma_session"));

		if (!body) return fail(400, { body, missing: true })

		const resp = await fetch("http://localhost:3000/api/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"cookie": session,
			},
			body: JSON.stringify({ body: body })
		});

		console.log(resp.status);
		console.log(resp.headers);
		console.log(await resp.json());


		const status = resp.status;

		return status === 201 ? { success: true } : { success: false };
	}
} satisfies Actions;