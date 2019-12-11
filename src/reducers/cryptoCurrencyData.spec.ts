import { GET_CRYPTO_CURRENCY } from '../actions/getCryptoCurrency';
import demoDataItem from '../testUtils/demoDataItem.json';
import { CryptoCurrencyAction } from '../types';
import cryptoCurrencyData from './cryptoCurrencyData';

describe('cryptoCurrencyId reducer', () => {

	it('returns default state if not type is given', () => {
		const newState = cryptoCurrencyData(undefined, ({} as CryptoCurrencyAction));
		expect(newState).toEqual([]);
	});

	it('returns new state if receiving type', () => {
		const mockCryptoCurrencyAction:CryptoCurrencyAction = {
			type: GET_CRYPTO_CURRENCY,
			payload: demoDataItem,
		};

		const newState = cryptoCurrencyData(undefined, mockCryptoCurrencyAction);
		expect(newState).toEqual(demoDataItem);
	});

});
