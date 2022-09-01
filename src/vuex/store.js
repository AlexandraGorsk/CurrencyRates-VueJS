import axios from 'axios';
import Vuex from 'vuex';

let store = new Vuex.Store({
	state: {
		currency: JSON.parse(localStorage.getItem('CurrencyRates')) || [],
	},
	mutations: {
		SET_CURRENCY: (state, currency) => {
			state.currency = currency;
		},

		REMOVE_FROM_TABLE: (state, Cur_ID) => {
			state.currency = state.currency.filter((item) => item.Cur_ID != Cur_ID);
			localStorage.setItem('CurrencyRates', JSON.stringify(state.currency));
		},
	},
	actions: {
		GET_RATES_FROM_API({ commit }) {
			return axios(`https://www.nbrb.by/api/exrates/rates?periodicity=0`, {
				method: 'GET',
			}).then((response) => {
				commit('SET_CURRENCY', response.data);
				localStorage.setItem('CurrencyRates', JSON.stringify(response.data));
				return response;
			});
		},
		DELETE_FROM_TABLE({ commit }, Cur_ID) {
			commit('REMOVE_FROM_TABLE', Cur_ID);
		},
	},
	getters: {
		CURRENCY(state) {
			return state.currency;
		},
	},
});
export default store;
