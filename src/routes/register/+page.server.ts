import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const username = data.get("handle");
        const email = data.get("email");
        const password = data.get("password");
        const password2 = data.get("password2");

        if (!username || !password || !password2 || !email) {
            return { success: false };
        }

        if (password !== password2) {
            return { success: false };
        }

        const registerData = {
            handle: username as string,
            email: email as string,
            password: password as string,
        };

        console.log(JSON.stringify(registerData));

        const res = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
        });

        if (res.status === 201) {
            throw redirect(301, "/login");
        }

        return { success: false };

    }
} satisfies Actions;
