import { combineReducers } from 'redux';
import cryptoCurrenciesData from './cryptoCurrenciesData';
import cryptoCurrencyData from './cryptoCurrencyData';
import cryptoCurrencyId from './cryptoCurrencyId';
import displayCurrency from './displayCurrency';
import isError from './isError';
import isLoading from './isLoading';

const rootReducer = combineReducers<any>({
	displayCurrency,
	cryptoCurrenciesData,
	cryptoCurrencyData,
	isLoading,
	isError,
	cryptoCurrencyId,
});

export default rootReducer;
