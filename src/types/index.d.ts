import { AnyAction } from 'redux';
import { ThunkDispatch} from 'redux-thunk';

export type DisplayCurrency = 'EUR' | 'GBP' | 'JPY' | 'KRW' | 'USD';

export type CryptoCurrencyId = string | 'bitcoin' | 'ethereum' | 'xrp' | 'tether' | 'bitcoin-cash' | 'litecoin' | 'eos' | 'binance-coin' | 'bitcoin-sv' | 'stellar';

export type CryptoData = CryptoDataItem[]

interface CryptoDataItem {
    id: CryptoCurrencyId;
    name: string; 
    symbol: string;
    rank: string; 
    price_usd: string;
    price_btc: string; 
    '24h_volume_usd': string; 
    market_cap_usd: string; 
    available_supply: string;  
    total_supply: string;  
    max_supply: string | null;  
    percent_change_1h: string; 
    percent_change_24h: string;  
    percent_change_7d:  string; 
    last_updated: string; 
}

export interface Action<T> {
	type: string;
	payload?: T;
}

export type DisplayCurrencyAction = Action<DisplayCurrency>; 
export type GetCryptoCurrenciesAction = Action<CryptoData>;
export type GetCryptoCurrencyAction = Action<CryptoData>
export type IsLoadingAction = Action<IsLoading>;
export type IsErrorAction = Action<IsError>;
export type CryptoCurrencyIdAction = Action<CryptoCurrencyId>;


export type IsLoading = boolean;
export type IsError = boolean;


export interface AppState {
    displayCurrency: DisplayCurrency;
    cryptoCurrenciesData: CryptoData;
    cryptoCurrencyData: CryptoData;
    isLoading: IsLoading;
    isError: IsError;
    cryptoCurrencyId: CryptoCurrencyId;
}

export type MyDispatch = ThunkDispatch<AppState, void, AnyAction>;
