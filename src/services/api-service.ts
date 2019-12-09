import { DisplayCurrency, CryptoCurrency, CryptoCurrenciesData, CryptoCurrenciesDataItem } from '../types';

export const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';

export const fetchCryptoCurrencies = (displayCurrency: DisplayCurrency = 'USD'): Promise<CryptoCurrenciesData> => {

    let url = baseUrl + '/?limit=10';

    if (displayCurrency !== 'USD') {
        url = `${url}&convert=${displayCurrency}`
    }

	return fetch(url)
		.then(response => response.json())
		.then(data =>  data)
}

export const fetchCryptoCurrency = (cryptoCurrency: CryptoCurrency, displayCurrency: DisplayCurrency = 'USD'): Promise<CryptoCurrenciesDataItem> => {

    let url;

    if (displayCurrency !== 'USD') {
        url = `${baseUrl}/${cryptoCurrency}/?convert=${displayCurrency}`
    } else {
        url = `${baseUrl}/${cryptoCurrency}/`;
    }

	return fetch(url)
		.then(response => response.json())
		.then(data =>  data)
}