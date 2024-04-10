<template>
    <div class="flex-column bg-white my-6 rounded-lg">
        <Post :name="'Tanirlan'" :surname="'Tanirtayev'" :title="'Title'" :body="'body'" :date_created="new Date()"/>
    </div>
</template>
<script>
import Post from "@/components/Post.vue"
export default {
    components:{
        Post
    }
}
</script>
<style>
    
</style>