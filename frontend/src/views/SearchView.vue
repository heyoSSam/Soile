<template>
    <div>
        <NavBar/>
        <div class="mx-10 bg-white h-screen">
            <Search/>  
            <div class="grid grid-cols-8">
                <div v-for="person in persons" :key="person.id"> 
                    <SearchPersonCard :name="person.name" :surname="person.surname"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Search from '@/components/Search.vue'
import NavBar from '@/components/NavBar.vue'
import SearchPersonCard from '@/components/SearchPersonCard.vue'

export default {
    components:{
        Search,
        NavBar,
        SearchPersonCard
    },
    setup(props){
        let persons = [
            {
                id:1,
                name: 'Tanir',
                surname: 'Tanir'
            },
            {
                id:2,
                name: 'Darkhan',
                surname: 'Mutashev'
            },
        ]

        return {persons}
    }
}
</script>
<style>
    
</style>