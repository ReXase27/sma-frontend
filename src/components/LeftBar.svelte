<script lang="ts">
    export let loggedIn: boolean = false;
    export let username: string = "";

    import home from "$lib/assets/home.png";
    import profile from "$lib/assets/profile.png";
    import messages from "$lib/assets/messages.png";
    import notifications from "$lib/assets/notifications.png";
    import search from "$lib/assets/search.png";
    import kata from "$lib/assets/kata.png";
    import UserCard from "./UserCard.svelte";
</script>

<div class="flex flex-col justify-between">
    <div>
        <ul
            class="flex align-middle flex-col gap-12 pt-12 mx-12 col-span-1 text-[#333]"
        >
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={home}
                    alt="home"
                />
                Home
            </button>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={profile}
                    alt="Profle"
                />
                Profile
            </button>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={messages}
                    alt="Messages"
                />
                Messages
            </button>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={search}
                    alt="Searcg"
                />
                Search
            </button>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={notifications}
                    alt="Notifications"
                />
                Notifications
            </button>
        </ul>
    </div>

    <div class="pb-4">
        <div class="bg-[#333] h-[1px] w-[100%] mb-4 align-middle self-center" />
        <UserCard {username} {loggedIn} />
    </div>
</div>
