require('../less/main.less');
var pcx = require('../images/pcx.jpg');
var Vue = require('vue');
var VueI18n = require('vue-i18n');

var locales = {
    en: {
        message: {
            hello: 'Hello World!'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界!'
        }
    },
    'zh-TW': {
        message: {
            hello: '你好! 世界!'
        }
    }
}

Vue.use(VueI18n);
Vue.config.lang = window.navigator.userLanguage || window.navigator.language;
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
})

new Vue({
    el: '#app',
    data: {
        // myData: 'vue runing!'
    },
    methods: {
        change(lang) {
            Vue.config.lang = lang;
        }
    }
})