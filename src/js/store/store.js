var Vuex = require('vuex');

module.exports = new Vuex.Store({
    modules: {
        a: require('./modules/moduleA.js'),
        b: require('./modules/moduleB.js')
    }
});