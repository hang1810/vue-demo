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
            // console.log('clicked');
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
new Vue({
    el: '#vue-app-6',
    data() {
        return {
            name: 'v-model',
            sex: 'male',
            sexs:["male", "female"],
            article:`hello this is my home`,
            from:'1',
            dest:[]
        }
    } 
});
var app7 = new Vue({
    el: '#vue-app-7',
    data() {
      return{
            name:'v-for if else',
            role:'super_admin',
            items: [
            { message: 'Foo' },
            { message: 'Bar' }
            ]
     }  
    }
});
var app8 = new Vue({
    el: '#vue-app-8',
    data() {
      return{
            name:'计算',
           math:90,
           physics:80,
           english:30
           
     }  
    },
    computed:{
       sum:function (){
           return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.english) ;
       },
       average:function (){
           return Math.round(this.sum/3);
       }

    } 
});

var app9 = new Vue({
    el: '#vue-app-9',
    data() {
      return{
        name:'yes',
        age: 21  
           
     }; 
    },
    methods:{
        getName(){
            // console.log(this.$refs);
            // console.log(this.$refs.name.value); console.log(this.$refs.age.value);
            this.name=this.$refs.name.value;
        },
        getAge(){
            this.age=this.$refs.age.value;  
        }
    },
    watch:{
        name(val,oldVal){
            console.log(val,oldVal)
        },
        age(val,oldVal){
            console.log(val,oldVal)
        }

    }
});

const app10 = new Vue({
    el: '#vue-app-10',
    data: {
        error: false,
        success: false
    } 
 
});
const app11 = new Vue({
    el: '#vue-app-11',
    data: {
        title: 'this is app 11'
    },
    computed:{
        greet(){
            return 'hello this is app 11';
        }
    }
 
});
const app12 = new Vue({
    el: '#vue-app-12',
    data: {
        title: 'this is app 12'
    } ,
    methods:{
        changeApp11Title(){
            app11.title=' this is app11 title 改变其它vue属性内容';
        }
    },
    computed:{
        greet(){
            return 'hello this is app 12';
        }
    }
});
app12.title=' this is app12 title 外部更改vueapp12 的title';

//创建全局变量
let data = {
    // oldName=' oldName'
    name:'小xiao可爱',
    wechat:'127127'

};
//创建全局组件
// Vue.component("名字",对象)
Vue.component("Greeting",{
    // 对象内容1、html 模板
    template:`
    <p id ="app13">这是全局组件 可以在任何实例的容器中使用 <br>
    我的名字是 {{name}},wechat:{{wechat}}<br>
    <button @click="changeName">改名</button>
    </p>
    
    `,
    // 属性方法
    data(){
        return data;
        // return{
        //     name:'小可爱',
        //     wechat:'127127'
        // };
    },
    methods:{
        changeName(){
            this.name='嘻嘻，我叫小小';
            // this.oldName=' 要全局变量才能全部变，不然只改单个VUE容器内的值';
        }
    }
})

const app13 = new Vue({
    el: '#vue-app-13',
    data: {
        title: 'this is app 13 组件'
    } 
});
const app14 = new Vue({
    el: '#vue-app-14',
    data: {
        title: 'this is app 14 组件'
    }  
  
});
const app15 = new Vue({
    el: '#vue-app-15',
    data() {
        return{
            todos:[],
            todo:{
                title：
            }
        }     
    },
    mounted(){
        console.log('默认启动执行');
            // const todos = fetch("http://jsonplaceholder.typicode.com/todos");
            // console.log(todos);
        //get
       // fetch api接口
       fetch("http://jsonplaceholder.typicode.com/todos").then( 
           res=>{
            return res.json();
         }
        ).then(todos=>{
            this.todos =todos;
        }); //返回对象
  
    },
    methods:{
        onSubmit(){
            
    }
  
});
