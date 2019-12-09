import displayCurrency from './displayCurrency';
import cryptoCurrenciesData from './cryptoCurrenciesData';
import isLoading from './isLoading';
import isError from './isError';
import { combineReducers } from 'redux';

const rootReducer = combineReducers<any>({
    displayCurrency,
    cryptoCurrenciesData,
    isLoading,
    isError
});

export default rootReducer;