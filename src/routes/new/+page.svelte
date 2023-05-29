<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PostReq } from "../../lib/types";

    let post: PostReq = {
        title: "",
        body: "",
        authorId: 0,
    };

    function validatePost(): boolean {
        if (post.title.length === 0) {
            alert("Title cannot be empty!");
            return false;
        }

        if (post.body.length === 0) {
            alert("Body cannot be empty!");
            return false;
        }

        return true;
    }

    function handleSubmit(event: Event) {
        event.preventDefault();
        if (!validatePost()) {
            return;
        }

        fetch("http://localhost:3000/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then((r) => {
            if (r.status === 204) {
                goto("/");
            } else {
                alert("Something went wrong!");
            }
        });
    }
</script>

<h1>New post</h1>
<form>
    <label>
        Title
        <input type="text" bind:value={post.title} placeholder="Title" />
    </label>
    <label>
        Content
        <textarea bind:value={post.body} placeholder="Content" />
    </label>
    <button type="button" on:click={handleSubmit}> Submit </button>
</form>
