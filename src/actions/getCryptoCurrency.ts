import { DisplayCurrency, CryptoCurrencyId } from "../types";
import { fetchCryptoCurrency } from '../services/api-service';
import { Dispatch } from 'redux';
import { setIsLoading } from "./setIsLoading";
import { setIsError } from "./setIsError";

export const GET_CRYPTO_CURRENCY = 'GET_CRYPTO_CURRENCY';

export const getCryptoCurrency = (cryptoCurrency: CryptoCurrencyId, displayCurrency:DisplayCurrency) => (dispatch:Dispatch) => {

    dispatch(setIsLoading(true));

    fetchCryptoCurrency(cryptoCurrency, displayCurrency)
    .then(data => {
        dispatch({
            type: GET_CRYPTO_CURRENCY,
            payload: data
        })
    })
    .then(() => dispatch(setIsLoading(false)))
    .catch((err) => {
        console.error(err);
        dispatch(setIsError(true));
    })
}
