var Vue = require('vue');
var Vuex = require('vuex');
Vue.use(Vuex);

module.exports = new Vuex.Store({
    modules: {
        a: require('./modules/moduleA.js'),
        b: require('./modules/moduleB.js')
    }
});