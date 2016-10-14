var MyModal = require('../components/myModal/myModal.js');
var MyModalBn = require('../components/myModalBn/myModalBn.vue');
var EzHeader = require('../components/header/header.vue');

module.exports.install = function (Vue, options) {
    Vue.mixin({
        beforeCreate: function () {
            Vue.component('ezModal', new MyModal('這一個Modal互動組件'));
            Vue.component('ezModalBn', MyModalBn);
            Vue.component('ezHeader', EzHeader);
        }
    })
}