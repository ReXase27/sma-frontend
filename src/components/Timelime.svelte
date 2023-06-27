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
            <h1>{post.authorId}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        {/each}
    {:else}
        <p>loading...</p>
    {/if}
</div>
