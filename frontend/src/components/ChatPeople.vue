<template>
    <div class="flex-col">
        <div v-for="person in persons" :key="person.id">
            <div class="my-6 mx-1">
                <div class="flex justify-start ">
                    <img class="rounded-full py-1 mx-2" src="https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=70&imh=70&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                    <div>
                        <p class="text-blue-600">{{person.name}} {{person.surname}} </p>
                        <p>{{ person.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>    
export default {
    props: {
        persons: Array
    }
}
</script>
<style>
    
</style>