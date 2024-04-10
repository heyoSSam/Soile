<template>
    <div>
        <div class="mx-3 shadow-md w-24 text-center h-48">
            <div>
                <img class="rounded-full mx-auto" src="https://steamuserimages-a.akamaihd.net/ugc/98351418449351690/FFB49D91F536E3CD46D04A6B570944D5D576E054/?imw=70&imh=70&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                <h1 class="my-1">{{name}} {{surname}}</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        name: String,
        surname: String,
        img: String
    }
}
</script>
<style>
    
</style>