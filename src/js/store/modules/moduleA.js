var EVENT = require('event');
module.exports = {
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
        [EVENT.INCREMENT](state, num) {
            state.count += num;
        },
    },
    actions: {
        [EVENT.INCREMENT]({ state, commit, rootState }, num = 0) {
            commit(EVENT.INCREMENT, num);
        }
    }
};;