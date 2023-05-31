<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Post } from "$lib/types";

    export let data: { posts: Post[] };
    const { posts } = data;
</script>

<div class="grid grid-cols-3 gap-4 h-screen bg-[#333] text-white">
    <div class="flex col-auto align-middle pl-8">
        <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    </div>
    <div>
        <button
            type="button"
            class="bg-orange-400 text-white rounded-md p-4 text-center text-lg"
            on:click={() => {
                goto("/new");
            }}>What's in your mind?</button
        >
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
    <div class="flex flex-col">
        <h3>Trending</h3>
        <ul>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
        </ul>
    </div>
</div>
