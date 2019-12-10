import { DisplayCurrency, CryptoCurrencyId, CryptoCurrenciesData, CryptoCurrencyData } from '../types';

export const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';

const demoData = require('../testUtils/demoData.json');
const demoDataItem = require('../testUtils/demoDataItem.json');

export const fetchCryptoCurrencies = (displayCurrency: DisplayCurrency = 'USD'): Promise<CryptoCurrenciesData> => {

    let url = baseUrl + '/?limit=10';

    if (displayCurrency !== 'USD') {
        url = `${url}&convert=${displayCurrency}`
    }
    // TEMP - to remove once the api starts working
    return new Promise((resolve)=> {
        return resolve(demoData)
    });

	// return fetch(url)
	// 	.then(response => response.json())
    //     .then(data =>  data)
        
}

export const fetchCryptoCurrency = (cryptoCurrency: CryptoCurrencyId, displayCurrency: DisplayCurrency = 'USD'): Promise<CryptoCurrencyData> => {

    let url;

    if (displayCurrency !== 'USD') {
        url = `${baseUrl}/${cryptoCurrency}/?convert=${displayCurrency}`
    } else {
        url = `${baseUrl}/${cryptoCurrency}/`;
    }

    // TEMP - to remove once the api starts working
    return new Promise((resolve)=> {
        return resolve(demoDataItem)
    });

	// return fetch(url)
	// 	.then(response => response.json())
    //     .then(data =>  data)
}