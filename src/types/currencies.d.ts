export type Currency = 'EUR' | 'GBP' | 'JPY' | 'KRW' | 'USD';

export type CryptoCurrency = string | 'bitcoin' | 'ethereum' | 'xrp' | 'tether' | 'bitcoin-cash' | 'litecoin' | 'eos' | 'binance-coin' | 'bitcoin-sv' | 'stellar';

export type CurrenciesData = CurrenciesDataItem[];

export interface CurrenciesDataItem {
    id: CryptoCurrency;
    name: string; 
    symbol: string;
    rank: string; 
    price_usd: string;
    price_btc: string; 
    '24h_volume_usd': string; 
    market_cap_usd: string; 
    available_supply: string;  
    total_supply: string;  
    max_supply: string;  
    percent_change_1h: string; 
    percent_change_24h: string;  
    percent_change_7d:  string; 
    last_updated: string; 
}