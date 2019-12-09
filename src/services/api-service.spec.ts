const globalAny:any = global;
import { baseUrl } from './api-service';

const mock = {
    baseUrl,
    urlTenLimit: '/?limit=10',
    currency: 'TEST'
};

// file under test
import { getCurrencies, getCurrency } from './api-service';

describe('api-service', () => {

    beforeEach(() => {
        const mockJsonPromise = Promise.resolve({});
        const mockFetchPromise = Promise.resolve({
          json: () => mockJsonPromise,
        });
        jest.spyOn(globalAny, 'fetch').mockImplementation(() => mockFetchPromise);
    })

    afterEach(() => {
        globalAny.fetch.mockClear();
    })

    describe('getCurrencies', () => {

        it('calls fetch with the correct url', done => {
            getCurrencies(); 
            expect(globalAny.fetch).toHaveBeenCalledTimes(1);
            expect(globalAny.fetch).toHaveBeenCalledWith(mock.baseUrl + mock.urlTenLimit);
            done();
        });

        it('adds the currency to the url if not the default USD', done => {
            const testCurrency = 'JPY'
            getCurrencies(testCurrency);
            expect(globalAny.fetch).toHaveBeenCalledTimes(1);
            expect(globalAny.fetch).toHaveBeenCalledWith(`${mock.baseUrl}${mock.urlTenLimit}&convert=${testCurrency}`);
            done();
        });
    });

    describe('getCurrency', () => {

        it('calls fetch with the correct url', done => {
            getCurrency(mock.currency); 
            expect(globalAny.fetch).toHaveBeenCalledTimes(1);
            expect(globalAny.fetch).toHaveBeenCalledWith(`${mock.baseUrl}/${mock.currency}/`);
            done();
        });

        it('adds the currency to the url if not the default USD', done => {
            const testCurrency = 'JPY'
            getCurrency(mock.currency, testCurrency);
            expect(globalAny.fetch).toHaveBeenCalledTimes(1);
            expect(globalAny.fetch).toHaveBeenCalledWith(`${mock.baseUrl}/${mock.currency}/?convert=${testCurrency}`);
            done();
        });
    });
});
