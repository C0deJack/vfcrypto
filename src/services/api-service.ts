import { DisplayCurrency, CryptoCurrencyId, CryptoData } from '../types';

export const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';

const demoData = require('../testUtils/demoData.json');
const demoDataItem = require('../testUtils/demoDataItem.json');

export const fetchCryptoCurrencies = (displayCurrency: DisplayCurrency = 'USD'): Promise<CryptoData> => {

    let url = baseUrl + '/?limit=10';

    if (displayCurrency !== 'USD') {
        url = `${url}&convert=${displayCurrency}`
    }

    // TEMP - to remove once the api starts working
    return Promise.resolve(demoData);
	// return fetch(url)
	// 	.then(response => response.json())
    //     .then(data =>  data)
        
}

export const fetchCryptoCurrency = (cryptoCurrency: CryptoCurrencyId, displayCurrency: DisplayCurrency = 'USD'): Promise<CryptoData> => {

    let url;

    
    if (displayCurrency !== 'USD') {
        url = `${baseUrl}/${cryptoCurrency}/?convert=${displayCurrency}`
    } else {
        url = `${baseUrl}/${cryptoCurrency}/`;
    }
    
    // TEMP - to remove once the api starts working
    console.log('step2')
    return Promise.resolve(demoDataItem);
	// return fetch(url)
	// 	.then(response => response.json())
    //     .then(data =>  data)
}