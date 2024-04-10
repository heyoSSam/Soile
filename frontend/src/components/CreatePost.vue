<template>
    <div class="bg-white rounded-lg my-6 p-2">
        <form>
            <div class="bg-gray-100 h-20 my-2 rounded-lg">
                <input class="bg-gray-100" type="text" placeholder="Write what new you had today">
            </div>

            <div class="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                
                <button class="bg-blue-600 rounded-lg p-2 text-white my-1">Submit Post</button>
            </div>
            
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
