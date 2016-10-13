var Vuex = require('vuex');
var MyModal = require('./components/myModal/myModal.js');
var MyModalBn = require('./components/myModalBn/myModalBn.vue');

module.exports.install = function (Vue, options) {
    Vue.mixin({
        beforeCreate: function () {
            Vue.component('ezModal', new MyModal('這一個Modal互動組件'));
            Vue.component('ezModalBn', MyModalBn);
        }
    })
}