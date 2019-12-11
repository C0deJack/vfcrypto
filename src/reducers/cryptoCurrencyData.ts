import { GET_CRYPTO_CURRENCY } from '../actions/getCryptoCurrency';
import { CryptoCurrencyAction } from '../types';

export const initialState = [];

export const cryptoCurrencyData = (state = initialState, action:CryptoCurrencyAction) => {
	switch (action.type) {
		case GET_CRYPTO_CURRENCY:
			return action.payload;

		default:
			return state;
	}
};

export default cryptoCurrencyData;
