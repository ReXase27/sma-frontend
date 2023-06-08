import { error } from "console";
import type { Post } from "../lib/types";
import type { Actions, PageServerLoad } from "./$types";
import useSession from "$lib/server/session";

export const load = (async ({ fetch, cookies }) => {
	const session = useSession(cookies);

	if (!session) return { posts: [], loggedIn: false };

	try {
		const res = await fetch("http://localhost:3000/api/post", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${session}`,
			},
		});
		const posts: Post[] = await res.json();
		return { posts: posts, loggedIn: true };
	} catch (e) {
		error(e);
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const body = data.get("body");

		if (body) {
			return { success: true };
		}

		return { success: false };
	},
} satisfies Actions;
