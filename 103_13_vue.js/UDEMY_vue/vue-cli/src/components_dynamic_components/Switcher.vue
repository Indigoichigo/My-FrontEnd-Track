<template>
    <div>
        <div
                id="on"
                @click="handleSwitch(true)"
                :class="{active: isSwitch}">On</div>
        <div
                id="off"
                @click="handleSwitch(false)"
                :class="{active: !isSwitch}">Off</div>
        <p>{{isSwitch}}</p>
    </div>
</template>

<script>
    export default {
        props: ['isSwitch'],
        methods: {
            handleSwitch: function(isOn) {
                this.$emit('input', isOn)
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>