<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Click is: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        computed: {
            //多getter寫法
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])

            // 單getter寫法
            // doubleCounter() {
            //     return this.$store.getters.doubleCounter;
            // },
            // stringCounter() {
            //     return this.$store.getters.stringCounter;
            // }
        }
    }
</script>