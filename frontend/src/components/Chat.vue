<template>
    <div class="bg-white h-screen flex">
        <ChatPeople :persons="people"></ChatPeople>
        <div class="vl"></div>
        <div class="w-screen">
            <ChatMessage :messages="messages"></ChatMessage>
        </div>
    </div>
</template>
<script>
import ChatPeople from '@/components/ChatPeople.vue'
import ChatMessage from '@/components/ChatMessage.vue'
import {ref} from 'vue'
export default {
    components:{
        ChatPeople,
        ChatMessage
    },
    setup(){
        let people = [
            {
                id:1,
                name: 'Tanir',
                surname: 'Tanir',
                message: 'hahaha'
            },
            {
                id:2,
                name: 'Darkhan',
                surname: 'Mutashev',
                message: 'skdnflskd'
            },
        ]

        let messages = [
            {
                id : 1,
                author: 'Tanir Tanir',
                self: true,
                content : 'hi'
            },
            {
                id : 2,
                author: 'DArkhan',
                self: false,
                content : 'hey'
            },
            {
                id : 1,
                author: 'Tanir Tanir',
                self: true,
                content : 'hi'
            },
        ]
        
        return {people, messages}
    }
}
</script>
<style>
.vl {
    border-left: 1px solid grey;
}

</style>