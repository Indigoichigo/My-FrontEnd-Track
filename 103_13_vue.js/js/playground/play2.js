data = {
    title: 'Vue'
}

let cmp = {
    data: function() {
        return {title: 'Vue'}
    },
    template: '<p>hello, {{ title }} <button @click="changeText">changeText</button></p>',
    methods: {
        changeText: function() {
            this.title = 'Vue-cli'
        }   
    }
}

new Vue({
    el: '#app1',
    components: {
        'hello': cmp
    }
})

new Vue({
    el: '#app2',
    components: {
        'hello': cmp
    }
})

