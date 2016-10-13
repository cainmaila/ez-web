var EVENT = require('event');
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
        addcount(state, num) {
            state.count += num;
        },
    },
    actions: {
        [EVENT.INCREMENT]({ state, commit, rootState }, num = 0) {
            commit('addcount', num);
        }
    }
}

module.exports = moduleA;