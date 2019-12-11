import { SET_CRYPTO_CURRENCY_ID } from '../actions/setCryptoCurrencyId';
import { CryptoCurrencyIdAction } from '../types';

export const initialState = '';

export const cryptoCurrencyId = (state = initialState, action:CryptoCurrencyIdAction) => {
	switch (action.type) {
		case SET_CRYPTO_CURRENCY_ID:
			return action.payload;

		default:
			return state;
	}
};

export default cryptoCurrencyId;
