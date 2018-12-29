let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue'
    }
});

let app2 = new Vue({
    el: '#app2',
    data: {
        message: 'hover text'
    }
});

app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});

let app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'html' },
            { text: 'css3' },
            { text: 'javascript'},
        ]
    }
});

let app5 = new Vue({
    el: '#app5',
    data: {
        message: 'bind-twoways'
    }
});

let app6 = new Vue({
    el: '#app6',
    data: {
        message: 'abcdefghijk'
    },
    methods: {
        reverseMessage: function() {
            //split先轉換成陣列，反轉後再join合併
            this.message = this.message.split('').reverse().join('')
        }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.tech }}</li>',
});

var app7 = new Vue({
    el: '#app7',
    data: {
        webTechs: [
            { id: 0, tech: 'html' },
            { id: 1, tech: 'css3' },
            { id: 2, tech: 'javascript' }
        ]
    }
});

let test1 = new Vue({
    data: {
        a: 1
    },
    created: () => (console.log(this._data))
});

let test2 = new Vue({
    el: '#test2',
    data: {
        //連html標籤都會輸出
        text1: '<span>hello</span>',
        //只會輸出hello2
        text2: '<span>hello2</span>'
    }
});

let test3 = new Vue({
    el: '#test3',
    data: {
        message: 'front-end',
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
});

let test4 = new Vue({
    el: '#test4',
    data: {
        message: 'back-end',
    },
    methods: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
});

let test5 = new Vue({
    el: '#test5',
    data: {
        isActive: true
    }
});

let test6 = new Vue({
    el: '#test6',
    data: {
        ok: false
    }
})


Vue.component('temp-if', {
    template: '<p>hello vue</p>'
})

let test7 = new Vue ({
    el: '#test7',
    data: {
        render: true
    }
})

Vue.component('login-by-username', {
    template: '<div><label>username</label><input type="text"  placeholder="username"></div>'
})


Vue.component('login-by-email', {
    template: '<div><label>email</label><input type="text" placeholder="email"></div>'
})

let test8 = new Vue ({
    el: '#test8',
    data: {
        username: true,
        inputType: 'username',
    },
    methods: {
        switchLoginWay: function() {
            this.username === true ? this.username = false : this.username = true;
        }
    }
})


let test9 = new Vue ({
    el: '#test9',
    data: {
        showEl: true,
    },
    methods: {
        switchLoginWay: function() {
            this.showEl === true ? this.showEl = false : this.showEl = true;
        }
    }
})



let test10 = new Vue ({
    el: '#test10',
    data: {
        staticText: 'Web-Techs',
        webTechs: [
            { id: 1, tech: 'HTML5' },
            { id: 2, tech: 'CSS3' },
            { id: 3, tech: 'Javascript' }
        ]
    }
})

let test11 = new Vue ({
    el: '#test11',
    data: {
        trends: {
            UIUX: 'WireFrame,Design',
            frontEnd: 'HTML,CSS,JS',
            backEnd: 'PHP,MySQL,RoR'
        }
    }
})

let test12 = new Vue ({
    el: '#test12',
    data: {
        numbers: [1, 2, 3, 4, 5],
    },
    methods: {
        even: function() {
            return this.numbers.filter( function(item) {
                return item % 2 === 0
            })
        }
    }
})




