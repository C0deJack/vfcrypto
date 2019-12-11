import { GET_CRYPTO_CURRENCIES } from '../actions/getCryptoCurrencies';
import demoData from '../testUtils/demoData.json';
import { CryptoCurrenciesAction } from '../types';
import cryptoCurrenciesData from './cryptoCurrenciesData';

describe('cryptoCurrenciesId reducer', () => {

	it('returns default state if not type is given', () => {
		const newState = cryptoCurrenciesData(undefined, ({} as CryptoCurrenciesAction));
		expect(newState).toEqual([]);
	});

	it('returns new state if receiving type', () => {
		const mockCryptoCurrenciesAction:CryptoCurrenciesAction = {
			type: GET_CRYPTO_CURRENCIES,
			payload: demoData,
		};

		const newState = cryptoCurrenciesData(undefined, mockCryptoCurrenciesAction);
		expect(newState).toEqual(demoData);
	});

});
