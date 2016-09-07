import '../less/main.less';
import Vue from 'vue';
const pcx = require('../images/pcx.jpg');
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

new Vue({
    el: '#app',
    data: {
        pcx: pcx
    }
})