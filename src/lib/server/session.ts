import type { Cookies } from "@sveltejs/kit";

export default function useSession(cookies: Cookies): string | null {
    const session = cookies.get("sma-session");

    if (!session) {
        return null;
    }

    return session;
}