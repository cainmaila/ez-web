module.exports = {
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