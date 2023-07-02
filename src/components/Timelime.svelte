<script lang="ts">
    import type { Post } from "$lib/types";
    export let posts: Post[];
</script>

<div>
    {#if posts}
        {#if posts.length === 0}
            <p>No posts yet!</p>
        {/if}

        {#each posts as post}
            <h1>{post.authorUsername}</h1>
            <h2>{post.authorHandle}</h2>
            <p>{post.body}</p>
        {/each}
    {:else}
        <p>loading...</p>
    {/if}
</div>
