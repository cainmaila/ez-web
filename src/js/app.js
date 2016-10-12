require('../less/main.less');

var pcx = require('../images/pcx.jpg');
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueI18n = require('vue-i18n');
var Promise = require('promise');

var MyModal = require('./components/myModal/myModal.js');
var MyModalBn = require('./components/myModalBn/myModalBn.vue');

Vue.component('ezModal', new MyModal('這一個Modal互動組件'));
Vue.component('ezModalBn', MyModalBn);

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
var router = new VueRouter({
    routes: [
        { path: '/p1', component: P1 },
        { path: '/p2', component: P2 },
    ]
});

Vue.use(VueI18n);
setLang(window.navigator.userLanguage || window.navigator.language)
    .then(function () {

        new Vue({
            data: {
                myData: 'vue runing!'
            },
            methods: {
                change: setLang
            },
            router: router,
        }).$mount('#app');

    })
    .catch(function (error) {
        console.error(error);
    });

/**
 * 	設定語系
 * @param {String} lang 語系
 */
function setLang(lang) {
    return new Promise(function (resolve, reject) {
        if (Vue.locale(lang)) {
            Vue.config.lang = lang;
            return resolve();
        } else {
            if (lang !== 'ja' && lang !== 'zh-TW') {
                lang = 'en';
            }
            fetch('/resources/lang/' + lang + '.json')
                .then(function (response) {
                    return response.json()
                }).then(function (json) {
                    Vue.locale(lang, json);
                    Vue.config.lang = lang;
                    return resolve();
                }).catch(function (ex) {
                    return reject(ex);
                });
        }
    });
}