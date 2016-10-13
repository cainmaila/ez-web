require('../less/main.less');

var pcx = require('../images/pcx.jpg');
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueI18n = require('vue-i18n');
var VueResource = require('vue-resource');
var Vuex = require('vuex');
var Promise = require('promise');

var MyModal = require('./components/myModal/myModal.js');
var MyModalBn = require('./components/myModalBn/myModalBn.vue');

Vue.component('ezModal', new MyModal('這一個Modal互動組件'));
Vue.component('ezModalBn', MyModalBn);

Vue.use(VueResource);
Vue.use(Vuex);

var INCREMENT = 'increment_event';

var moduleA = {
    state: {
        count: 0,
        storeName: 'my storeName is moduleA!!',
    },
    getters: {
        count(state, getters, rootState) {
            return state.count + 1;
        }
    },
    mutations: {
        [INCREMENT](state, num) {
            state.count += num;
        },
    },
    actions: {
        [INCREMENT]({ state, commit, rootState }, num = 0) {
            commit(INCREMENT, num);
        }
    }
};

var moduleB = {
    state: {
        count: 9999,
        storeName: 'my storeName is moduleB!!',
    },
    getters: {
        countBBB(state, getters, rootState) {
            return state.count + 1;
        }
    },
};

var store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
});

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
                myData: 'vue runing!',
                jsonData: {}
            },
            methods: Object.assign({},
                Vuex.mapActions([INCREMENT]), {
                    // Vuex.mapMutations([INCREMENT]), {
                    change: setLang,
                    getJson(e) {
                        var $this = $(e.target);
                        $this.button('loading');
                        this[INCREMENT](3);
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
            router,
            store,
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