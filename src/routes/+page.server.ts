import type { Actions } from "@sveltejs/kit";

import type { Post } from "../lib/types";
import type { PageServerLoad } from "./$types";

export const load = (async ({ fetch }) => {
	try {
		const res = await fetch("http://localhost:3000/api/post");
		const posts: Post[] = await res.json();
		return { posts: posts };
	} catch (e) { }

	return { posts: [] };

}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const body = data.get("body");

		if (body) {
			console.log(body);
			return { success: true }
		}

		return { success: false }

	}
} satisfies Actions;