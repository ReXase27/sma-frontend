export default async function checkSession(sessionId: string) {
    // wrap in try-catch in case the server is down
    try {
        const res = await fetch("http://localhost:3000/api/auth/check", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cookie": sessionId
            },
        });

        const json = await res.json();
        const username = json.username;
        const handle = json.handle;

        if (res.status === 200) {
            return { success: true, username: username, handle: handle };
        }
    } catch (e) {
        return { success: false, username: "", handle: "" };
    }
}