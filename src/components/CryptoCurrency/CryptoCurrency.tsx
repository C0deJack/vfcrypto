import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { getCryptoCurrency } from '../../actions/getCryptoCurrency';
import { setCryptoCurrencyId } from '../../actions/setCryptoCurrencyId';
import { setIsLoading } from '../../actions/setIsLoading';
import appConfig from '../../appConfig.json';
import { actionTimer } from '../../libs/actionTimer';
import { AppState, CryptoCurrencyId, CryptoData, DisplayCurrency, IsError, IsLoading, MyDispatch } from '../../types';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

import './CryptoCurrency.scss';

const displayCurrenciesMap = appConfig.displayCurrencies;

export interface CryptoCurrencyProps {
	cryptoCurrencyData: CryptoData;
	cryptoCurrencyId: CryptoCurrencyId;
	displayCurrency: DisplayCurrency;
	isLoading: IsLoading;
	isError: IsError;
	match: any;
}

interface CryptoCurrencyDispatches {
	getCryptoCurrency: (cryptoCurrencyId:CryptoCurrencyId, displayCurrency:DisplayCurrency) => void;
	setCryptoCurrencyId: (cryptoCurrencyId:CryptoCurrencyId) => void;
	setIsLoading: (isLoading:boolean) => void;
}

export type CombinedProps = CryptoCurrencyProps & CryptoCurrencyDispatches;


export class CryptoCurrency extends Component<CombinedProps> {

	constructor(props:CombinedProps) {
		super(props);

		this.props.setCryptoCurrencyId(this.props.match.params.cryptoCurrency);

		actionTimer(() => {
			this.props.getCryptoCurrency(this.props.match.params.cryptoCurrency, this.props.displayCurrency);
		});
	}

	public render() {
		const data = this.props.cryptoCurrencyData[0];

		return (
			<>
				{this.props.isError ? <Error />
					: (
						this.props.isLoading ? <Loading />
						: (
							data &&
								<div className='crypto-currency'>
									<div className='crypto-currency__rank'>
										<div className='crypto-currency__rank-container'>
											<div className='crypto-currency__rank-text'>RANK</div>
											<div className='crypto-currency__rank-circle'>
												<div className='crypto-currency__rank-number'>{data.rank}</div>
											</div>
										</div>
									</div>
									<table className='crypto-currency__table'>
										<thead>
											<tr>
												<th className='crypto-currency__table-headers'>MARKET CAP</th>
												<th className='crypto-currency__table-headers'>24H VOLUME</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='crypto-currency__table-data'>
													<NumberFormat
														value={data.market_cap_usd}
														displayType={'text'}
														thousandSeparator={true}
														prefix={displayCurrenciesMap[this.props.displayCurrency]}
														decimalScale={0}
													/>
												</td>
												<td className='crypto-currency__table-data'>
													<NumberFormat
														value={data['24h_volume_usd']}
														displayType={'text'}
														thousandSeparator={true}
														prefix={displayCurrenciesMap[this.props.displayCurrency]}
														decimalScale={0}
													/>
												</td>
											</tr>
										</tbody>
										<thead>
											<tr>
												<th className='crypto-currency__table-headers'>CIRCULATION SUPPLY</th>
												<th className='crypto-currency__table-headers'>TOTAL SUPPLY</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='crypto-currency__table-data'>
													<NumberFormat
														value={data.available_supply}
														displayType={'text'}
														thousandSeparator={true}
														suffix={'  ' + data.symbol}
														decimalScale={0}
													/>
												</td>
												<td className='crypto-currency__table-data'>
													<NumberFormat
														value={data.max_supply}
														displayType={'text'}
														thousandSeparator={true}
														suffix={'  ' + data.symbol}
														decimalScale={0}
													/>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							)
					)
				}
			</>

		);
	}
}

const mapStateToProps = (state:AppState, props:CryptoCurrencyProps):CryptoCurrencyProps => ({
	cryptoCurrencyData: state.cryptoCurrencyData,
	cryptoCurrencyId: state.cryptoCurrencyId,
	displayCurrency: state.displayCurrency,
	isLoading: state.isLoading,
	isError: state.isError,
	match: props.match,
});

const mapDispatchToProps = (dispatch:MyDispatch):CryptoCurrencyDispatches => {
	return {
		setCryptoCurrencyId(cryptoCurrencyId:CryptoCurrencyId) {
			dispatch(
				setCryptoCurrencyId(cryptoCurrencyId),
			);
		},
		getCryptoCurrency(cryptoCurrencyId:CryptoCurrencyId, displayCurrency:DisplayCurrency) {
			dispatch(
				getCryptoCurrency(cryptoCurrencyId, displayCurrency),
			);
		},
		setIsLoading(isLoading:boolean) {
			dispatch(
				setIsLoading(isLoading),
			);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrency);
