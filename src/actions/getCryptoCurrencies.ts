import { fetchCryptoCurrencies } from '../services/api-service';
import { DisplayCurrency, MyDispatch } from '../types';
import { setDateStamp } from './setDateStamp';
import { setIsError } from './setIsError';
import { setIsLoading } from './setIsLoading';

export const GET_CRYPTO_CURRENCIES = 'GET_CRYPTO_CURRENCIES';

export const getCryptoCurrencies = (displayCurrency:DisplayCurrency) => (dispatch:MyDispatch) => {

	dispatch(setIsLoading(true));

	fetchCryptoCurrencies(displayCurrency)
	.then(data => {
		dispatch({
			type: GET_CRYPTO_CURRENCIES,
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
