import checkSession from "$lib/checkSession";
import { redirect, type Actions } from "@sveltejs/kit";

export type LoginData = {
    email: string;
    password: string;
};

export const load = (async ({ cookies }) => {
    const sessionCheck = await checkSession(cookies.get("_sma_session") as string);
    if (sessionCheck?.success) { throw redirect(301, "/"); }
});

export const actions = {
    default: async ({ request, cookies }) => {

        const formData = await request.formData();

        if (!formData.has("email") || !formData.has("password")) {
            return { loginSuccess: false };
        }

        const requestData: LoginData = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const resp = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (resp.status !== 200) {
            return { loginSuccess: false };
        }

        const sessionId = resp.headers.get("set-cookie")
        cookies.set("_sma_session", sessionId as string);

        throw redirect(301, "/");
    }
} satisfies Actions;
