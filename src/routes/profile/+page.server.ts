import checkSession from "$lib/checkSession";
import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {

	const session = cookies.get("_sma_session");

	if (!session)
		throw redirect(301, "/login");

	const sessionCheck = await checkSession(session);

	if (!sessionCheck?.success)
		throw redirect(301, "/logout");

	const username = sessionCheck.username;
	const handle = sessionCheck.handle;
	const loggedIn = true;

	return { username: username, handle: handle, loggedIn: loggedIn };
}

export const actions = {
	updateProfile: async ({ request, cookies }) => {
		const formData = await request.formData();
		const newUsername = formData.get("username") as string;
		const bio = formData.get("bio") as string;

		if (!newUsername)
			return { success: false };

		const resp = await fetch("http://localhost:3000/api/user/profileupdate", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Cookie": cookies.get("_sma_session") as string,

			},
			body: JSON.stringify({ username: newUsername, bio: bio })
		});

		if (resp.status !== 200) {
			console.log(resp.status);
			console.log(await resp.text());
		}

		return { success: false };
	}
}