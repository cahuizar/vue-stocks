export default {
    state: {
        funds: 1000,
        stocks: []
    },
    mutations: {
        'BUY_STOCKS'(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id === stockId);
            if (record) {
                record.quantity += quantity
            } else {
                this.stocks.push({id: stockId, quantity})
            }
            state.funds -= stockPrice * quantity
        },
        'SELL_STOCKS'(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id === stockId);
            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }

            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit('SELL_STOCK', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id === stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}