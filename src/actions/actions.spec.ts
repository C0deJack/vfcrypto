import { CryptoCurrencyId, DisplayCurrency, IsError, IsLoading } from '../types';
import { SET_CRYPTO_CURRENCY_ID, setCryptoCurrencyId } from './setCryptoCurrencyId';
import { SET_DATE_STAMP, setDateStamp } from './setDateStamp';
import { SET_DISPLAY_CURRENCY, setDisplayCurrency } from './setDisplayCurrency';
import { SET_IS_ERROR, setIsError } from './setIsError';
import { SET_IS_LOADING, setIsLoading } from './setIsLoading';

describe('actions', () => {

	describe('setIsLoading', () => {
		it('returns it\'s given type and payload', () => {
			const payload = true;
			const result = setIsLoading(payload as IsLoading);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_IS_LOADING);
		});
	});

	describe('setIsError', () => {
		it('returns it\'s given type and payload', () => {
			const payload = true;
			const result = setIsError(payload as IsError);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_IS_ERROR);
		});
	});

	describe('setDisplayCurrency', () => {
		it('returns it\'s given type and payload', () => {
			const payload = 'JPY';
			const result = setDisplayCurrency(payload as DisplayCurrency);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_DISPLAY_CURRENCY);
		});
	});

	describe('setCryptoCurrencyId', () => {
		it('returns it\'s given type and payload', () => {
			const payload = 'loads_a_money';
			const result = setCryptoCurrencyId(payload as CryptoCurrencyId);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_CRYPTO_CURRENCY_ID);
		});
	});

	describe('setDateStamp', () => {
		it('returns it\'s given type and payload', () => {
			const payload = new Date();
			const result = setDateStamp(payload as Date);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_DATE_STAMP);
		});
	});
});
