<script lang="ts">
    import { goto } from "$app/navigation";
    import type { UserReq } from "$lib/types";

    let newUser: UserReq = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
    };

    let passwordCheck = "";
    let success: boolean;

    function checkPasswords() {
        if (newUser.password !== passwordCheck) {
            alert("Passwords do not match");
        }
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        checkPasswords();
        fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(newUser),
        }).then((res) => {
            if (res.status === 204) {
                success = true;
                setTimeout(() => {
                    goto("/");
                }, 3000);
            } else alert("Something went wrong!");
        });
    }
</script>

<!-- <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"> -->
<!-- <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10" /> -->

{#if success}
    <h1 class="text-3xl text-center text-white">Account created!</h1>
{/if}

<form
    class="mb-0 space-y-6 flex justify-center h-screen bg-[#333]"
    action="#"
    method="POST"
>
    <div>
        <label for="firstName" class="block text-sm font-medium text-white"
            >First Name</label
        >
        <div class="mt-1">
            <input
                id="firstName"
                name="firstName"
                type="text"
                autocomplete="given-name"
                bind:value={newUser.first_name}
                required
                class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
            />
        </div>

        <div>
            <label for="lastName" class="block text-sm font-medium text-white"
                >Last Name</label
            >
            <div class="mt-1">
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autocomplete="family-name"
                    bind:value={newUser.last_name}
                    required
                    class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                />
            </div>

            <div>
                <label
                    for="username"
                    class="block text-sm font-medium text-white">Username</label
                >
                <div class="mt-1">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        autocomplete="username"
                        bind:value={newUser.username}
                        required
                        class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                    />
                </div>

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-white"
                        >Email</label
                    >
                    <div class="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            bind:value={newUser.email}
                            required
                            class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="password"
                        class="block text-sm font-medium text-white"
                        >Password</label
                    >
                    <div class="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            bind:value={newUser.password}
                            required
                            class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="passwordCheck"
                        class="block text-sm font-medium text-white"
                        >Confirm Password</label
                    >
                    <div class="mt-1">
                        <input
                            id="passwordCheck"
                            name="passwordCheck"
                            type="password"
                            autocomplete="current-password"
                            bind:value={passwordCheck}
                            required
                            class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                        />
                    </div>
                </div>

                <div class="mt-4">
                    <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        on:click={handleSubmit}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
<!-- </div> -->
