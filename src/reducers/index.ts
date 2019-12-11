import displayCurrency from './displayCurrency';
import cryptoCurrenciesData from './cryptoCurrenciesData';
import cryptoCurrencyData from './cryptoCurrencyData';
import isLoading from './isLoading';
import isError from './isError';
import cryptoCurrencyId from './cryptoCurrencyId';
import { combineReducers } from 'redux';

const rootReducer = combineReducers<any>({
    displayCurrency,
    cryptoCurrenciesData,
    cryptoCurrencyData,
    isLoading,
    isError,
    cryptoCurrencyId
});

export default rootReducer;