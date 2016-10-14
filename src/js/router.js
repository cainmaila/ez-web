var Vue = require('vue');
var VueRouter = require('vue-router');
//異步加窄
var Home = function (r) {
    require.ensure([], function () {
        r(require('./page/home/home.js'));
    }, 'home');
}
var P2 = function (r) {
    require.ensure([], function () {
        r(require('./components/p2/p2.vue'));
    }, 'p2');
}


Vue.use(VueRouter);

module.exports = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/p2', component: P2 },
    ]
});