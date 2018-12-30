<template>
    <div>
        <h1>The User Page</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         id: this.$route.params.id 
        //     }
        // },
        // watch: {
        //     // 如果route改變，更新data內容
        //     '$route'(to, from) {
        //         this.id = to.params.id;
        //     }
        // },
    }
</script>

<style>

</style>