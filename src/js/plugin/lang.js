var Promise = require('promise');
var Vue = require('vue');
var VueI18n = require('vue-i18n');

Vue.use(VueI18n);

module.exports.install = function (Vue, options) {
    Vue.setLang = function (lang) {
        return new Promise(function (resolve, reject) {
            if (Vue.locale(lang)) {
                Vue.config.lang = lang;
                return resolve();
            } else {
                if (lang !== 'ja' && lang !== 'zh-TW') {
                    lang = 'en';
                }
                // fetch('/resources/lang/' + lang + '.json')
                Vue.http.get('/resources/lang/' + lang + '.json')
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
}