import { GetCryptoCurrenciesAction } from '../types';
import { GET_CRYPTO_CURRENCIES } from '../actions/getCryptoCurrencies';

export const initialState = [];

export const cryptoCurrenciesData = (state = initialState, action:GetCryptoCurrenciesAction) => {
	switch (action.type) {
		case GET_CRYPTO_CURRENCIES:
			return action.payload;

		default:
			return state;
	}
};

export default cryptoCurrenciesData;