import useSession from "$lib/server/session";
import { redirect, type Actions } from "@sveltejs/kit";
import { error } from "console";

export type LoginData = {
    credential: string;
    password: string;
};

enum LoginStatus {
    NONE = 0,
    MISSING_CREDENTIALS = 1,
    INCORRECT_CREDENTIALS = 2,
    UNKNOWN = 3,
}

export const actions = {
    default: async ({ request, cookies }) => {

        if (useSession(cookies))
            throw redirect(302, "/");


        const formData = await request.formData();

        if (!formData.has("credential") || !formData.has("password")) {
            return { loginSuccess: false, reason: LoginStatus.MISSING_CREDENTIALS };
        }

        const requestData: LoginData = {
            credential: formData.get("credential") as string,
            password: formData.get("password") as string,
        };

        await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        }).then(async (res) => {
            if (res.status === 200) {
                const headers = res.headers;
                cookies.set("sma-session", headers.get("sma-session") as string);
                return { loginSuccess: true, reason: LoginStatus.NONE };
            } else if (res.status === 401) {
                return {
                    loginSuccess: false,
                    reason: LoginStatus.INCORRECT_CREDENTIALS,
                };
            }
            error(res);
            return { loginSuccess: false, reason: LoginStatus.UNKNOWN };
        });
    },
} satisfies Actions;
