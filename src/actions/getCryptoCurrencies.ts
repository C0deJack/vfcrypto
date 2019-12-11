import { DisplayCurrency } from "../types";
import { fetchCryptoCurrencies } from '../services/api-service';
import { Dispatch } from 'redux';
import { setIsLoading } from "./setIsLoading";
import { setIsError } from "./setIsError";

export const GET_CRYPTO_CURRENCIES = 'GET_CRYPTO_CURRENCIES';

export const getCryptoCurrencies = (displayCurrency:DisplayCurrency) => (dispatch:Dispatch) => {

    dispatch(setIsLoading(true));
    
    fetchCryptoCurrencies(displayCurrency)
    .then(data => {
        dispatch({
            type: GET_CRYPTO_CURRENCIES,
            payload: data
        })
    })
    .then(() => dispatch(setIsLoading(false)))
    .catch((err) => {
        console.error(err);
        dispatch(setIsError(true));
    })
}
