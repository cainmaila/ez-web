import '../less/main.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import P1 from '../components/p1/p1.js';
import P2 from '../components/p2/p2.js';
// const P2 = resolve => require(['../components/p2/p2.js'], resolve);
// const P2 = r => require.ensure([], () => r(require('../components/p2/p2.js')), '/p2');
import pcx from '../images/pcx.jpg';



class MyCalss {
    constructor(name_) {
        this.myname = name_;
    }

    namelog() {
        return this.myname;
    }
}

let myClass = new MyCalss('ES6 Class');
document.getElementById('output').innerHTML = myClass.namelog();

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: P1 },
    { path: '/p1', component: P1 },
    { path: '/p2', component: P2 }
  ]
})

new Vue({
    router,
    el: '#app',
    data: {
        pcx: pcx
    },
    components:{
        'p1':P1
    }
})