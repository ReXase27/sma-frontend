<script lang="ts">
    import kata from "$lib/assets/kata.png";

    export let username: string;
    export let loggedIn: boolean;
</script>

{#if loggedIn}
    <a
        href={"/profile"}
        class="flex items-center align-middle justify-between hover:cursor-pointer"
    >
        <img class="ml-4 w-16 rounded-md" src={kata} alt={"pfp"} />
        <div class="flex flex-col gap-2 mr-4">
            <h1 class=" text-center text-lg">John Doe</h1>
            <div class="bg-[#333] h-[1px] w-[100%] align-middle self-center" />

            <span class=" text-center text-sm text-gray-500">
                @{username}
            </span>
        </div>
    </a>
{:else}
    <div class="flex items-center align-middle justify-center">
        <a
            class="bg-none text-center text-lg hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            href={"/login"}>Login</a
        >
        <a
            class="bg-none text-center text-lg hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            href={"/register"}>Register</a
        >
    </div>
{/if}
