<script lang="ts">
    export let loggedIn: boolean = false;
    export let username: string;
    export let handle: string;

    import home from "$lib/assets/home.png";
    import profile from "$lib/assets/profile.png";
    import messages from "$lib/assets/messages.png";
    import notifications from "$lib/assets/notifications.png";
    import search from "$lib/assets/search.png";
    import logout from "$lib/assets/logout.png";
    import UserCard from "./UserCard.svelte";
</script>

<div class="flex flex-col justify-between">
    <div>
        <ul
            class="flex align-middle flex-col gap-12 pt-12 mx-12 col-span-1 text-[#333]"
        >
            <a
                href="/"
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={home}
                    alt="home"
                />
                <h1 class="lg:visible md:collapse sm:collapse">Home</h1>
            </a>
            <a
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
                href="/profile"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={profile}
                    alt="Profle"
                />
                <h1 class="lg:visible md:collapse sm:collapse">Profile</h1>
            </a>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={messages}
                    alt="Messages"
                />
                <h1 class="lg:visible md:collapse sm:collapse">Messages</h1>
            </button>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={search}
                    alt="Search"
                />
                <h1 class="lg:visible md:collapse sm:collapse">Search</h1>
            </button>
            <button
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={notifications}
                    alt="Notifications"
                />
                <h1 class="lg:visible md:collapse sm:collapse">
                    Notifications
                </h1>
            </button>
            <a
                class="flex text-center align-middle gap-8 hover:underline decoration-teal-400 underline-offset-4 hover:cursor-pointer"
                href="/logout"
            >
                <img
                    class="w-6 h-6 align-middle content-center"
                    src={logout}
                    alt="Logout"
                />
                <h1 class="lg:visible md:collapse sm:collapse">Logout</h1>
            </a>
        </ul>
    </div>

    <div class="pb-4">
        <UserCard {username} {handle} {loggedIn} />
    </div>
</div>
