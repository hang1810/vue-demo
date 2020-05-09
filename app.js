new Vue({
    el: '#vue-app',
    data: {
        name: '测试1'
    }
});


new Vue({
    el: '#vue-app-2',
    data: {
        name2: '两id设置'
    }
});

new Vue({
    el: '#vue-app-3',
    data: {
        name: '方法'
    },
    methods: {
        greet(time) {
            return `good night ` + this.name;
        },
        greet2(time2) {
            return `GOOD ${time2} ${this.name}`;
        }
    }
});
new Vue({
    el: '#vue-app-4',
    data() {
        return {
            name: 'v-bind 绑定属性',
            vueUrl: 'https://cn.vuejs.org/v2/api/#v-bind',
            vueUrlTag: '<a href="https://cn.vuejs.org/v2/api/#v-bind">vurUrl</a>'
        }
    }
});
new Vue({
    el: '#vue-app-5',
    data() {
        return {
            name: 'v-on 事件绑定',
            age: '30'
        }
    },
    methods: {
        onClick(string) {
            console.log('clicked');
            return `GOOD  ${string}`;
        },
        onEnter() {
            console.log('mouse enter');
        },
        onOut() {
            console.log('mouse leace');
        },
        onSubmit() {

            console.log('submited');
        }

    }
});