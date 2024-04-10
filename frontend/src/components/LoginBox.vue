<template>
        <div class="h-screen flex align-center justify-center">

            <form class="text-center border-2 border-black p-10 my-auto">
                <h1 class="text-7xl mb-3">Login</h1>
                <p>Login</p>
                <input type="text" class="bg-gray-100 my-2" placeholder="Enter your login" v-model="login">
                <p>Password</p>
                <input type="password" class="bg-gray-100 my-2" placeholder="Enter your password" v-model="password">
                <p></p> 
                <button class="bg-blue-600 rounded-lg px-4 py-2 text-white my-1">Submit</button>
                <a href="/signup">
                    <p class="text-center">Sign up</p>
                </a>
            </form>
        </div>
</template>
<script>
import {ref} from 'vue'
export default {
    setup(){
        let login = ref(''), password=ref('')

        return {
            login,
            password
        }
    }
}
</script>
