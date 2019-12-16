import { fetchCryptoCurrency } from '../services/api-service';
import { CryptoCurrencyId, DisplayCurrency, MyDispatch } from '../types';
import { setDateStamp } from './setDateStamp';
import { setIsError } from './setIsError';
import { setIsLoading } from './setIsLoading';

export const GET_CRYPTO_CURRENCY = 'GET_CRYPTO_CURRENCY';

export const getCryptoCurrency = (
	cryptoCurrency:CryptoCurrencyId,
	displayCurrency:DisplayCurrency,
	) => (dispatch:MyDispatch) => {

	dispatch(setIsLoading(true));

	fetchCryptoCurrency(cryptoCurrency, displayCurrency)
	.then(data => {
		dispatch({
			type: GET_CRYPTO_CURRENCY,
			payload: data.cryptoData,
		});

		return data;
	})
	.then(data => dispatch(setDateStamp(data.dateStamp)))
	.then(() => dispatch(setIsLoading(false)))
	.catch((err) => {
		console.error(err);
		dispatch(setIsError(true));
	});
};
