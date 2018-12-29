<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ myAge }}</p>
        <button @click="EditAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: {
            myAge: Number,
        },
        methods: {
            EditAge: function() {
                this.myAge = 30;
                // this.$emit('ageWasEdited', this.myAge)
                eventBus.$emit('ageWasEdited', this.myAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
