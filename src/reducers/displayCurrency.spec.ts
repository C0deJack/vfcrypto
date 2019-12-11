import { SET_DISPLAY_CURRENCY } from '../actions/setDisplayCurrency';
import { DisplayCurrencyAction } from '../types';
import displayCurrency from './displayCurrency';

describe('isLoading reducer', () => {

	it('returns default state if not type is given', () => {
		const newState = displayCurrency(undefined, ({} as DisplayCurrencyAction));
		expect(newState).toEqual('USD');
	});

	it('returns new state if receiving type', () => {
		const mockDisplayCurrencyAction:DisplayCurrencyAction = {
			type: SET_DISPLAY_CURRENCY,
			payload: 'JPY',
		};

		const newState = displayCurrency('USD', mockDisplayCurrencyAction);
		expect(newState).toEqual('JPY');
	});

});
