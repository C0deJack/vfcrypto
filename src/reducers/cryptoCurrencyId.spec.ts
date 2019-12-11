import { SET_CRYPTO_CURRENCY_ID } from '../actions/setCryptoCurrencyId';
import { CryptoCurrencyIdAction } from '../types';
import cryptoCurrencyId from './cryptoCurrencyId';

describe('cryptoCurrencyId reducer', () => {

	it('returns default state if not type is given', () => {
		const newState = cryptoCurrencyId(undefined, ({} as CryptoCurrencyIdAction));
		expect(newState).toEqual('');
	});

	it('returns new state if receiving type', () => {
		const mockCryptoCurrencyIdAction:CryptoCurrencyIdAction = {
			type: SET_CRYPTO_CURRENCY_ID,
			payload: 'TESTICLE_COIN',
		};

		const newState = cryptoCurrencyId('', mockCryptoCurrencyIdAction);
		expect(newState).toEqual('TESTICLE_COIN');
	});

});
