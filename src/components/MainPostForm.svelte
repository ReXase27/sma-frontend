<script>
    import location from "$lib/assets/location.png";
    import image from "$lib/assets/image.png";
    import attachment from "$lib/assets/attachment.png";
</script>

<form class="pt-4 mb-4 flex flex-col" method="post" action="?/createPost">
    <div class="flex flex-col border-teal-600 border rounded-md">
        <textarea
            name="body"
            class="w-full h-32 p-4 rounded-t-md text-black resize-none border-b border-teal-600 focus:outline-none"
            placeholder="What's in your mind?"
        />
        <div class="bg-teal-400 py-2 rounded-b-md flex justify-between">
            <ul class="flex justify-between gap-4 align-middle content-center">
                <!-- Todo: make buttons actually work -->
                <img
                    class="mt-2 ml-2 w-6 h-6"
                    src={attachment}
                    alt="location"
                />
                <img class="mt-2 ml-2 w-6 h-6" src={location} alt="location" />
                <img class="mt-2 ml-2 w-6 h-6" src={image} alt="location" />
            </ul>
            <button
                type="submit"
                class="bg-teal-600 text-white rounded-md p-1 px-2 text-center text-lg transition hover:bg-teal-800 mr-2 hover:ease-in-out delay-50"
                >Send post</button
            >
        </div>
    </div>
</form>
