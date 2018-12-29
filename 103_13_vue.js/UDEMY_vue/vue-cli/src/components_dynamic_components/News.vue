<template>
    <div class="box">
         <h1>News</h1>
         <button @click="counter +=1">counter</button>
         <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        }
        
    }
</script>

<style>
    .box {
        border: 1px solid #999
    }

    
</style>