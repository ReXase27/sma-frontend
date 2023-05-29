<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Post } from "$lib/types";

    export let data: { posts: Post[] };
    const { posts } = data;
</script>

<button
    type="button"
    class="bg-orange-400 text-white rounded-md p-4 text-center text-lg"
    on:click={() => {
        goto("/new");
    }}>What's in your mind?</button
>

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
