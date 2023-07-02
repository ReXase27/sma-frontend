import checkSession from "$lib/checkSession";
import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {

	const session = cookies.get("_sma_session");

	if (!session)
		throw redirect(301, "/login");

	if (!await checkSession(session))
		throw redirect(301, "/logout");

	const username = cookies.get("username") as string;
	const handle = cookies.get("handle") as string;
	const loggedIn = true;

	return { username: username, handle: handle, loggedIn: loggedIn };
}
