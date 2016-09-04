require('../less/main.less');
const pcx = require('../images/pcx.jpg');
import 'babel-polyfill'; //fix ie8 html5
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
document.getElementById('pcx').src = pcx;