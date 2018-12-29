<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>User Age: {{ myAge }}</p>
        <button @click="ResetName">Reset Name</button>
        <button @click="resetChildName()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: {
            myName: String,
            resetChildName: Function,
            myAge: Number
        },
        methods: {
            ResetName: function() {
                this.myName = 'Max'
                this.$emit('resetName', this.myName)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.myAge = age
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
