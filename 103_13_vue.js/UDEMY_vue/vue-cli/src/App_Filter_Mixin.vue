<template>
    <div>
        <p>{{ title | alpabetUpper | alpabetLower }}</p>
        <input v-model="filterText">
        <ul>
             <li v-for="fruit in fruitFilter" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
        <MixinList></MixinList>
    </div>
</template>

<script>
    import MixinList from './components_filter_mixin/App_Mixin.vue';
    import fruitMixin from './components_filter_mixin/fruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                title: 'hello, vue',
            }
        },
        filters: {
            alpabetUpper(value) {
                // 這裡的value會跟前面template中的data參照
                return value.toUpperCase()
            }
        },
        components: {
            MixinList
        }

    }
    
</script>

<style>

</style>