// import demoData from '../testUtils/demoData.json';
// import demoDataItem from '../testUtils/demoDataItem.json';
import { CryptoCurrencyId, CryptoData, DisplayCurrency } from '../types';

export const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';


export const fetchCryptoCurrencies = (displayCurrency:DisplayCurrency = 'USD'):Promise<CryptoData> => {

	let url;

	if (displayCurrency !== 'USD') {
		url = `${baseUrl}/?limit=10&convert=${displayCurrency}`;
	} else {
		url = `${baseUrl}/?limit=10`;
	}

	// Uncomment to return demo data if API is down
	// return Promise.resolve(demoData);

	return fetch(url)
		.then(response => response.json())
		.then(data =>  data);

};

export const fetchCryptoCurrency = (
	cryptoCurrency:CryptoCurrencyId,
	displayCurrency:DisplayCurrency = 'USD',
	):Promise<CryptoData> => {

	let url;

	if (displayCurrency !== 'USD') {
		url = `${baseUrl}/${cryptoCurrency}/?convert=${displayCurrency}`;
	} else {
		url = `${baseUrl}/${cryptoCurrency}/`;
	}

	// Uncomment to return demo data if API is down
	// return Promise.resolve(demoDataItem);

	return fetch(url)
		.then(response => response.json())
		.then(data =>  data);
};
