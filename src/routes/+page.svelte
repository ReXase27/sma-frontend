<script lang="ts">
    import type { Post } from "$lib/types";
    import LeftBar from "../components/LeftBar.svelte";
    import TrendingBar from "../components/TrendingBar.svelte";
    import type { ActionData } from "./$types";

    export let data: { posts: Post[]; loggedIn: boolean };
    const { posts } = data;

    export let form: ActionData;
</script>

<div class="grid grid-cols-5 h-screen bg-[#333] text-white">
    <LeftBar loggedIn={data.loggedIn} />
    <div
        class="col-span-3 items-center align-middle text-center border-t-2 border-white px-4 mt-4 rounded-t-lg border-r-2 border-l-2"
    >
        {#if data && data.loggedIn}
            <h1 class="text-2xl">Welcome back!</h1>
        {:else}
            <h1 class="text-2xl">Welcome to SvelteKit!</h1>
        {/if}

        {#if form && form?.success}
            <p class="text-green-500">Post sent! 🥳</p>
        {:else if form && !form?.success}
            <p class="text-red-500 pt-2">Something went wrong! 😟</p>
        {/if}
        <form class="pt-8 mb-8" method="post">
            <textarea
                name="body"
                class="w-full h-32 p-4 rounded-md text-black resize-none"
                placeholder="What's in your mind?"
            />
            <button
                type="submit"
                class="bg-orange-400 text-white rounded-md p-4 text-center text-lg hover:bg-orange-500"
                >Send post</button
            >
        </form>

        <div>
            {#if data}
                {#if data.posts.length === 0}
                    <p>No posts yet!</p>
                {/if}

                {#each posts as post}
                    <h1>{post.authorId}</h1>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                {/each}
            {:else}
                <p>loading...</p>
            {/if}
        </div>
    </div>
    <TrendingBar />
</div>
