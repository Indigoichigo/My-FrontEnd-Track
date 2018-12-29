<template>
    <div>
        <input v-model="filterText">
        <ul>
             <li v-for="fruit in fruitFilter" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
    import fruitMixin from './fruitMixin';

    export default {
        mixins: [fruitMixin]
    }
</script>

<style>

</style>