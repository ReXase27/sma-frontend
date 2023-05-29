import type { Post } from "../lib/types";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
    const res = await fetch("http://localhost:3000/api/post");
    const posts: Post[] = await res.json();

    console.log(posts);

    return { posts: posts };
}) satisfies PageLoad;