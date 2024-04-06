import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            results: [],
            timer: 0,
            settings: null,
            complexity: 1,
        }
    },
    mutations: {
        addRes(state, payload) {
            state.results = [...state.results, payload]
        },
        setTimer(state, payload) {
            state.timer = payload
        },
        setSettings(state, payload) {
            state.settings = payload
        },
        setComplexity(state, payload) {
            state.complexity = payload
        }
    },
    getters: {
        timer(state) {
            return state.timer
        },
        settings(state) {
            return state.settings
        },
        complexity(state) {
            return state.complexity
        },
        results(state) {
            return state.results
        }
    }
})

export default store