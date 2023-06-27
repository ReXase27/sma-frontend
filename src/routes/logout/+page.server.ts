import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";


export const load = (async ({ cookies }) => {
    cookies.getAll().forEach(cookie => {
        cookies.delete(cookie.name);
    });
    throw redirect(302, "/login");

}) satisfies PageServerLoad;

