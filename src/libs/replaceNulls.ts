
type InputData = [] | DataWithNulls[];

interface DataWithNulls {
	id: string | null;
	name: string | null;
	symbol: string | null;
	rank: string | null;
	price_usd: string | null;
	price_btc: string | null;
	'24h_volume_usd': string | null;
	market_cap_usd: string | null;
	available_supply: string | null;
	total_supply: string | null;
	max_supply: string | null;
	percent_change_1h: string | null;
	percent_change_24h: string | null;
	percent_change_7d: string | null;
	last_updated: string | null;
}

type OutputData = [] | DataOnlyStrings[];

interface DataOnlyStrings {
	id: string;
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
	percent_change_7d: string;
	last_updated: string;
}

export const replaceNulls = (inputData:InputData, replaceValue = ''):OutputData => {

	const replacer = (key:any, value:any) => {
		return String(value) === 'null' || String(value) === 'undefined' ? replaceValue : value;
	};

	return JSON.parse(JSON.stringify(inputData, replacer));
};
