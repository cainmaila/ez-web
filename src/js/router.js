var Vue = require('vue');
var VueRouter = require('vue-router');

//異步載入
var Home = function (r) {
    require.ensure([], function () {
        r(require('./page/home/home.js'));
    }, 'home');
}
var Comp = function (r) {
    require.ensure([], function () {
        r(require('./page/component_page/component_page.js'));
    }, 'component_page');
}


Vue.use(VueRouter);

module.exports = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/comp', component: Comp },
    ]
});