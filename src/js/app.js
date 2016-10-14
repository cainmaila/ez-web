require('../less/main.less');
var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(require('./component.js'));
Vue.use(VueResource);
Vue.use(require('./lang.js'));
Vue.setLang(window.navigator.userLanguage || window.navigator.language)
    .then(function () {
        new Vue({
            router: require('./router.js'),
            store: require('./store/store.js'),
        }).$mount('#app');
    })
    .catch(function (error) {
        console.error(error);
    });