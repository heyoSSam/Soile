<template>
    <div class="h-screen flex align-center justify-center">

        <form class="text-center border-2 border-black p-10 my-auto">
            <h1 class="text-7xl mb-3">SignUp</h1>
            <p>Name</p>
            <input type="text" class="bg-gray-100 my-2" placeholder="Enter your name" v-model="name">
            <p>Surname</p>
            <input type="text" class="bg-gray-100 my-2" placeholder="Enter your surname" v-model="surname">
            <p>Email</p>
            <input type="email" class="bg-gray-100 my-2" placeholder="Enter your mail" v-model="email">
            <p>Password</p>
            <input type="password" class="bg-gray-100 my-2" placeholder="Enter your password" v-model="password">
            <p></p> 
            <button class="bg-blue-600 rounded-lg px-4 py-2 text-white my-1">Submit</button>
            <a href="/login">
                <p class="text-center">Login</p>
            </a>
        </form>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    setup(){
        let name = ref(''), surname = ref(''), email = ref(''), password = ref('')

        return {
            name,
            surname,
            email,
            password
        }
    }
}
</script>
