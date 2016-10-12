require('../less/main.less');
require('../resources/en.json');
require('../resources/ja.json');
require('../resources/zh-TW.json');

var pcx = require('../images/pcx.jpg');
var Vue = require('vue');
var VueI18n = require('vue-i18n');
var Promise = require('promise');



Vue.use(VueI18n);
setLang(window.navigator.userLanguage || window.navigator.language)
    .then(function () {
        new Vue({
            el: '#app',
            data: {
                myData: 'vue runing!'
            },
            methods: {
                change: setLang
            }
        });
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
            fetch('/resources/' + lang + '.json')
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