import { Currency, CryptoCurrency, CurrenciesData, CurrenciesDataItem } from '../types/currencies';

export const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';

export const getCurrencies = (conversion: Currency = 'USD'): Promise<CurrenciesData> => {

    let url = baseUrl + '/?limit=10';

    if (conversion !== 'USD') {
        url = `${url}&convert=${conversion}`
    }

	return fetch(url)
		.then(response => response.json())
		.then(data => {
            console.log(data);
            return data;
        })
		.catch(err => console.error(err));
}

export const getCurrency = (cryptoCurrency: CryptoCurrency, conversion: Currency = 'USD'): Promise<CurrenciesDataItem> => {

    let url;

    if (conversion !== 'USD') {
        url = `${baseUrl}/${cryptoCurrency}/?convert=${conversion}`
    } else {
        url = `${baseUrl}/${cryptoCurrency}/`;
    }

	return fetch(url)
		.then(response => response.json())
		.then(data => {
            console.log(data);
            return data;
        })
		.catch(err => console.error(err));
}