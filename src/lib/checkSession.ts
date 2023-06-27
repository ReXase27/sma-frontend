export default async function checkSession(sessionId: string): Promise<boolean> {
    // wrap in try-catch in case the server is down
    try {
        const res = await fetch("http://localhost:3000/api/auth/check", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cookie": sessionId
            },
        });
        return res.status === 200;
    } catch (e) {
        return false;
    }
}