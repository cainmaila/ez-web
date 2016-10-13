var Vue = require('vue');
var Vuex = require('vuex');
var EVENT = require('./store/event.js');

module.exports = {
    data: {
        myData: 'vue runing!',
        jsonData: {}
    },
    methods: Object.assign({},
        Vuex.mapActions([EVENT.INCREMENT]), {
            // Vuex.mapMutations([INCREMENT]), {
            change: Vue.setLang,
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
    // store: require('store'),
    store: require('./store/store.js'),
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
}