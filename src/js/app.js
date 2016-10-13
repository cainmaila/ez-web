require('../less/main.less');

var pcx = require('../images/pcx.jpg');
var Vue = require('vue')
var VueI18n = require('vue-i18n');
var VueResource = require('vue-resource');
var Vuex = require('vuex');
var Promise = require('promise');

var EVENT = require('event');

Vue.use(require('./component.js'));
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueI18n);

setLang(window.navigator.userLanguage || window.navigator.language)
    .then(function () {

        new Vue({
            data: {
                myData: 'vue runing!',
                jsonData: {}
            },
            methods: Object.assign({},
                Vuex.mapActions([EVENT.INCREMENT]), {
                    // Vuex.mapMutations([INCREMENT]), {
                    change: setLang,
                    getJson(e) {
                        var $this = $(e.target);
                        $this.button('loading');
                        this[EVENT.INCREMENT](3);
                        this.$http.get('/resources/lang/zh-TW.json')
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (json) {
                                this.jsonData = json;
                                $this.button('reset');
                            })
                            .catch(function (err) {
                                this.jsonData = err;
                                $this.button('reset');
                            });
                    }
                }),
            router: require('./router.js'),
            store: require('store'),
            computed: Object.assign({},
                // Vuex.mapState({
                //     storeName(state) {
                //         return state.b.storeName;
                //     }
                // }),
                Vuex.mapState(['a', 'b']),
                Vuex.mapGetters(['count', 'countBBB']), {
                    countAdd() {
                        return this.count + 1;
                    }
                }
            ),
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