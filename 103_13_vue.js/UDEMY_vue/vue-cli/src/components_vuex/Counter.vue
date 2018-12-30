<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">aIncrement</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 100, duration: 500})">aDecrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>