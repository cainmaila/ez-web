require('../less/main.less');
import 'babel-polyfill'; //fix ie8 html5
class MyCalss {
    constructor(name_) {
        this.myname = name_;
    }

    namelog() {
        return this.myname;
    }
}

let myClass = new MyCalss('cain');
document.getElementById('output').innerHTML = myClass.namelog();