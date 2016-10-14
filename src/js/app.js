require('../less/main.less');
var Vue = require('vue');
var VueResource = require('vue-resource');
var EzComponent = require('./plugin/component.js');
var LanguagePlugin = require('./plugin/lang.js');
var Router = require('./router.js');
var Store = require('./store/store.js');
var CONST = require('./const.js');

Vue.use(EzComponent);
Vue.use(VueResource);
Vue.use(LanguagePlugin);


Vue.setLang(window.navigator.userLanguage || window.navigator.language)
    .then(function () {
        new Vue({
            router: Router,
            store: Store,
        }).$mount(CONST.ROOT_DOM_ID);
    })
    .catch(function (error) {
        console.error(error);
    });