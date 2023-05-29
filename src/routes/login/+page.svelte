<script lang="ts">
    import { goto } from "$app/navigation";
    import type { LoginReq, UserReq } from "$lib/types";

    async function login(event: Event) {}

    let loginData: LoginReq = {
        credential: "",
        password: "",
    };
</script>

<form
    class="mb-0 space-y-6 flex justify-center h-screen bg-[#333]"
    on:submit|preventDefault={login}
    method="POST"
>
    <div>
        <div>
            <label for="credential" class="block text-sm font-medium text-white"
                >Username or Email</label
            >
            <div class="mt-1">
                <input
                    id="credential"
                    name="credential"
                    type="text email"
                    autocomplete="email "
                    bind:value={loginData.credential}
                    required
                    class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                />
            </div>
        </div>

        <div>
            <label for="password" class="block text-sm font-medium text-white"
                >Password</label
            >
            <div class="mt-1">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    bind:value={loginData.password}
                    required
                    class="w-full border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-600"
                />
            </div>
        </div>

        <div class="mt-4">
            <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Sign Up
            </button>
        </div>
    </div>
</form>
<!-- </div> -->
