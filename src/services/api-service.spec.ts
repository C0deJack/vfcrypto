const globalAny:any = global;

const mock = {
	baseUrl,
	urlTenLimit: '/?limit=10',
	currency: 'TEST',
};

// file under test
import { baseUrl, fetchCryptoCurrencies, fetchCryptoCurrency } from './api-service';

describe('api-service', () => {

	beforeEach(() => {
		const mockJsonPromise = Promise.resolve({});
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise,
		});
		jest.spyOn(globalAny, 'fetch').mockImplementation(() => mockFetchPromise);
	});

	afterEach(() => {
		globalAny.fetch.mockClear();
	});

	describe('fetchCryptoCurrencies', () => {

		it('calls fetch with the correct url', done => {
			fetchCryptoCurrencies();
			expect(globalAny.fetch).toHaveBeenCalledTimes(1);
			expect(globalAny.fetch).toHaveBeenCalledWith(mock.baseUrl + mock.urlTenLimit);
			done();
		});

		it('adds the currency to the url if not the default USD', done => {
			const testCurrency = 'JPY';
			fetchCryptoCurrencies(testCurrency);
			expect(globalAny.fetch).toHaveBeenCalledTimes(1);
			expect(globalAny.fetch).toHaveBeenCalledWith(`${mock.baseUrl}${mock.urlTenLimit}&convert=${testCurrency}`);
			done();
		});
	});

	describe('fetchCryptoCurrency', () => {

		it('calls fetch with the correct url', done => {
			fetchCryptoCurrency(mock.currency);
			expect(globalAny.fetch).toHaveBeenCalledTimes(1);
			expect(globalAny.fetch).toHaveBeenCalledWith(`${mock.baseUrl}/${mock.currency}/`);
			done();
		});

		it('adds the currency to the url if not the default USD', done => {
			const testCurrency = 'JPY';
			fetchCryptoCurrency(mock.currency, testCurrency);
			expect(globalAny.fetch).toHaveBeenCalledTimes(1);
			expect(globalAny.fetch).toHaveBeenCalledWith(`${mock.baseUrl}/${mock.currency}/?convert=${testCurrency}`);
			done();
		});
	});
});
