import { DisplayCurrency, CryptoCurrencyId } from "../types";
import { fetchCryptoCurrency } from '../services/api-service';
import { Dispatch } from 'redux';
import { SET_IS_LOADING } from "./setIsLoading";
import { SET_IS_ERROR } from "./setIsError";

export const GET_CRYPTO_CURRENCY = 'GET_CRYPTO_CURRENCY';

export const getCryptoCurrency = (cryptoCurrency: CryptoCurrencyId, displayCurrency:DisplayCurrency) => (dispatch:Dispatch) => {

    fetchCryptoCurrency(cryptoCurrency, displayCurrency)
    .then(data => {
        dispatch({
            type: GET_CRYPTO_CURRENCY,
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
