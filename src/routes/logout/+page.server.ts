import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import useSession from "$lib/server/session";

export const load = (async ({ cookies }) => {
    const session = useSession(cookies);
    if (!session)
        throw redirect(302, "/login");

    cookies.delete("sma-session");
    throw redirect(302, "/login");
}) satisfies PageServerLoad;