<template>
    <div class="flex-col">
        <div v-for="message in messages" :key="message.id">
            <div v-if="message.self">
                <div class="my-6 mx-6">
                    <div class="flex justify-end">
                        <img class="rounded-full py-1 mx-2" src="https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=70&imh=70&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        <div>
                            <p class="text-blue-600">{{message.author}}</p>
                            <p>{{ message.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div v-else>
                <div class="my-6 mx-1">
                    <div class="flex justify-start ">
                        <img class="rounded-full py-1 mx-2" src="https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=70&imh=70&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        <div>
                            <p class="text-blue-600">{{message.author}}</p>
                            <p>{{ message.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        messages : Array
    },
    setup(props){
    }
}
</script>
<style>
    
</style>