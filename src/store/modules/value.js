const state = {
    value: 11
};

const getters = {
    value: state => {
        return state.value;
    }
};

const mutations = {
    updateValue: (state, payload) => {
        state.value = payload;
    }
};

const actions = {
    updateValue: ({ commit }, payload) => {
        commit('updateValue', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}