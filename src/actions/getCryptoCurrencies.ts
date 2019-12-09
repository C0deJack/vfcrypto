import { DisplayCurrency } from "../types";
import { fetchCryptoCurrencies } from '../services/api-service';
import { Dispatch } from 'redux';
import { SET_IS_LOADING } from "./setIsLoading";
import { SET_IS_ERROR } from "./setIsError";

export const GET_CRYPTO_CURRENCIES = 'GET_CRYPTO_CURRENCIES';

export const getCryptoCurrencies = (displayCurrency:DisplayCurrency) => (dispatch:Dispatch) => {

    fetchCryptoCurrencies(displayCurrency)
    .then(data => {
        dispatch({
            type: GET_CRYPTO_CURRENCIES,
            payload: data
        })
    })
    .then(() => {
        dispatch({
            type: SET_IS_LOADING,
            payload: false
        })
    })
    .catch((err) => {
        console.error(err);
        dispatch({
            type: SET_IS_ERROR,
            payload: true
        })

    })
}
