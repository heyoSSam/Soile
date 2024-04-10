<script setup>
  import NavBar from '@/components/NavBar.vue'
  import Friends from '@/components/Friends.vue'
  import Weather from '@/components/Weather.vue'
  import News from '@/components/News.vue'
  import CreatePost from '@/components/CreatePost.vue'
</script>

<template>
    <div>
      <NavBar/>
        
      <div class="grid grid-cols-6 gap-4">
        <Friends/>
        
        <div class="col-span-4">
          <CreatePost/>
          <News/>
        </div>
      
        <Weather/>
      </div>
    </div>  
    
    
</template>
