import stocks from '../../data/data';

export default {
	state: {
		stocks: [],
	},
	mutations: {
		SET_STOCKS(state, stocks) {
			state.stocks = stocks;
		},
		RND_STOCKS(state) {
			state.stocks.forEach((stock) => {
				stock.price = stock.price * (1 + Math.random() - 0.5);
			});
		},
	},
	actions: {
		buyStock: ({ commit }, order) => {
			commit('BUY_STOCKS', order);
		},
		initStocks: ({ commit }) => {
			commit('SET_STOCKS', stocks);
		},
		randomizeStocks: ({ commit }) => {
			commit('RND_STOCKS');
		},
	},
	getters: {
		stocks: (state) => {
			return state.stocks;
		},
	},
};
