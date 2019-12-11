import { CryptoCurrencyId, CryptoCurrencyIdAction } from '../types';

export const SET_CRYPTO_CURRENCY_ID = 'SET_CRYPTO_CURRENCY_ID';

export const setCryptoCurrencyId = (payload:CryptoCurrencyId):CryptoCurrencyIdAction => ({
	type: SET_CRYPTO_CURRENCY_ID,
	payload,
});
