<template>
    <div>
        <div class="my-6 mx-1">
            <div class="flex justify-start ">
                <img class="rounded-full py-1 mx-2" src="https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=70&imh=70&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                <div>
                    <p class="text-blue-600">{{name}} {{surname}} </p>
                    <p>{{date_created}}</p>
                </div>
            </div>
            <div class="mx-2">
                <h1 class="text-4xl my-1">{{ title }}</h1>
                <p>{{ body }}</p>
            </div>

            <hr class="my-2">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name : String,
        surname : String,
        date_created: Date,
        title: String,
        body: String 
    }
}
</script>
<style>
    
</style>