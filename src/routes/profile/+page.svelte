<script lang="ts">
    import LeftBar from "../../components/LeftBar.svelte";
    import TrendingBar from "../../components/TrendingBar.svelte";
    import banner from "$lib/assets/banner.jpg";
    import pfp from "$lib/assets/kata.png";
    import edit from "$lib/assets/edit.png";

    export let data;
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
        class="col-span-3 items-center align-middle text-center border-t-[1px] border-[#333] px-2 pt-2 rounded-t-lg border-r-[1px] border-l-[1px] bg-teal-50"
    >
        <div class="flex flex-col">
            <div class="border-[1px] rounded-lg m-4 gap-4">
                <div class="flex flex-col rounded-lg h-[60%]">
                    <img
                        src={banner}
                        alt="avatar"
                        class=" rounded-t-lg w-[100%] h-[60%]"
                    />
                </div>
                <div
                    class="flex justify-between flex-col -mt-[3rem] bg-white rounded-b-lg"
                >
                    <div class="-mb-8">
                        <img
                            src={pfp}
                            alt="avatar"
                            class="w-24 h-24 mx-auto rounded-full border-4 border-white"
                        />
                    </div>

                    <div class="border-b-[1px] flex justify-between">
                        <div
                            class="flex flex-col text-left justify-start pb-4 pl-4"
                        >
                            <h1>{data.username}</h1>
                            <h2 class="text-gray-500">@{data.handle}</h2>
                        </div>
                        <button title="Edit" class="-mt-4 p-4">
                            <img src={edit} alt="edit" class="w-6 h-6" />
                        </button>
                    </div>

                    <p class="text-justify px-2 py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <TrendingBar />
</div>
