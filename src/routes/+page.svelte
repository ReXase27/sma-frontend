<script lang="ts">
    import type { Post } from "$lib/types";
    import LeftBar from "../components/LeftBar.svelte";
    import TrendingBar from "../components/TrendingBar.svelte";
    import MainPostForm from "../components/MainPostForm.svelte";
    import Timelime from "../components/Timelime.svelte";

    export let data: {
        loggedIn: boolean;
        username: string;
        handle: string;
        posts: Post[];
    };
</script>

<div
    class="grid grid-cols-5 h-screen bg-white text-[#333] pt-8 font-montserrat"
>
    <LeftBar
        loggedIn={data.loggedIn}
        handle={data.handle}
        username={data.username}
    />
    <div
        class="col-span-3 items-center align-middle text-center border-t-[1px] border-[#333] px-4 mt-4 rounded-t-lg border-r-[1px] border-l-[1px] bg-teal-50"
    >
        <MainPostForm />

        <div class="bg-teal-200 h-[1px] w-[100%] mb-4" />

        <Timelime posts={data.posts} />
    </div>
    <TrendingBar />
</div>
