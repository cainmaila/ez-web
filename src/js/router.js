var Vue = require('vue');
var VueRouter = require('vue-router');
//異步加窄
var P1 = function (r) {
    require.ensure([], function () {
        r(require('./components/p1/p1.vue'));
    }, 'p1');
}
var P2 = function (r) {
    require.ensure([], function () {
        r(require('./components/p2/p2.vue'));
    }, 'p2');
}


Vue.use(VueRouter);

module.exports = new VueRouter({
    routes: [
        { path: '/p1', component: P1 },
        { path: '/p2', component: P2 },
    ]
});