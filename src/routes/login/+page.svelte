<script lang="ts">
    import { goto } from "$app/navigation";

    export let data: { loginSuccess?: boolean };
    data.loginSuccess = undefined;
</script>

<form
    class="mb-0 space-y-6 flex justify-center h-screen bg-[#333]"
    method="post"
>
    <div>
        {#if data && data.loginSuccess === undefined}
            <p class="text-white">Please login to continue</p>
        {:else if data && data.loginSuccess}
            <p class="text-green-500">Logged in! 🥳</p>
            {setTimeout(() => {
                goto("/");
            }, 1000)}
        {:else if data && !data?.loginSuccess}
            <p class="text-red-500 pt-2">Something went wrong! 😟</p>
        {/if}
        <div>
            <label for="email" class="block text-sm font-medium text-white"
                >Email</label
            >
            <div class="mt-1">
                <input
                    id="email"
                    name="email"
                    type="text email"
                    autocomplete="email "
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
                Login
            </button>
        </div>
        <div class="flex flex-col text-white py-8">
            <h3>Don't have an account?</h3>
            <a
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                href="/register">Sign up</a
            >
        </div>
    </div>
</form>
