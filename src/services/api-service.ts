import { replaceNulls } from '../libs/replaceNulls';
// import demoData from '../testUtils/demoData.json';
// import demoDataItem from '../testUtils/demoDataItem.json';
import { CryptoCurrencyId, CryptoData, DateStampedCryptoData, DisplayCurrency } from '../types';

export const baseUrl = 'https://api.coinmarketcap.com/v1/ticker';


export const fetchCryptoCurrencies = (displayCurrency:DisplayCurrency = 'USD'):Promise<DateStampedCryptoData> => {
	// eslint-disable-next-line
	let url;

	if (displayCurrency !== 'USD') {
		url = `${baseUrl}/?limit=10&convert=${displayCurrency}`;
	} else {
		url = `${baseUrl}/?limit=10`;
	}

	// Uncomment to return demo data if API is down
	// const cryptoData:CryptoData = replaceNulls(demoData);

	// const dateStampedDemoData = {
	// 	dateStamp: new Date(),
	// 	cryptoData,
	// };

	// return Promise.resolve(dateStampedDemoData);

	return fetch(url)
		.then(response => response.json())
		.then(replaceNulls)
		.then((cryptoData:CryptoData) => {
			const dateStamp = new Date();

			return {
				dateStamp,
				cryptoData,
			};
		});
};

export const fetchCryptoCurrency = (
	cryptoCurrency:CryptoCurrencyId,
	displayCurrency:DisplayCurrency = 'USD',
	):Promise<DateStampedCryptoData> => {
	// eslint-disable-next-line
	let url;

	if (displayCurrency !== 'USD') {
		url = `${baseUrl}/${cryptoCurrency}/?convert=${displayCurrency}`;
	} else {
		url = `${baseUrl}/${cryptoCurrency}/`;
	}

	// Uncomment to return demo data if API is down
	// const cryptoData:CryptoData = replaceNulls(demoDataItem);

	// const dateStampedDemoData = {
	// 	dateStamp: new Date(),
	// 	cryptoData,
	// };

	// return Promise.resolve(dateStampedDemoData);

	return fetch(url)
		.then(response => response.json())
		.then(replaceNulls)
		.then((cryptoData:CryptoData) => {
			const dateStamp = new Date();

			return {
				dateStamp,
				cryptoData,
			};
		});
};
