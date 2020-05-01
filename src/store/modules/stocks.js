import stocks from "../../data/data";

export default {
    state: {
        stocks: []
    },
    mutations: {
        'SET_STOCKS'(state, stocks) {
            state.stocks = stocks;
        },
        'RND_STOCKS'(state) {

        }
    },
    actions: {
        buyStock: ({commit}) => {
            commit();
        },
        initStocks: ({commit}) => {
            commit('SET_STOCKS', stocks)
        },
        randomizeStocks:({commit}) => {
            commit('RND_STOCKS');
        }
    },
    getters: {
        stocks: state => {
            return state.stocks
        }
    }
}