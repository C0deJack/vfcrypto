import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';
import { actionTimer } from '../../libs/actionTimer';
import {
	AppState,
	CryptoData,
	DisplayCurrency,
	IsError,
	IsLoading,
} from '../../types';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import TableRows from '../TableRows/TableRows';

import './CryptoCurrencies.scss';

export interface CryptoCurrenciesProps {
	cryptoCurrenciesData: CryptoData;
	displayCurrency: DisplayCurrency;
	isLoading: IsLoading;
	isError: IsError;
}

interface CryptoCurrenciesDispatches {
	getCryptoCurrencies: (displayCurrency:DisplayCurrency) => void;
	actionTimer: () => void;
}

export type CombinedProps = CryptoCurrenciesProps & CryptoCurrenciesDispatches;

export class CryptoCurrencies extends Component<CombinedProps> {
	constructor(props:CombinedProps) {
		super(props);

		actionTimer(() => {
			this.props.getCryptoCurrencies(this.props.displayCurrency);
		});
	}

	public render() {
		return (
			<>
				{this.props.isError ? (
					<Error />
				) : this.props.isLoading ? (
					<Loading />
				) : (
					<table className='crypto-currencies__table'>
						<thead className='crypto-currencies__table-headers'>
							<tr>
								<th className='crypto-currencies__table-data crypto-currencies__table-left'>
									CRYPTOCURRENCY
								</th>
								<th className='crypto-currencies__table-data'>PRICE</th>
								<th className='crypto-currencies__table-data'>MARKET CAP</th>
								<th className='crypto-currencies__table-data crypto-currencies__table-right'>
									24HR CHANGE
								</th>
							</tr>
						</thead>
						<tbody>
							<TableRows
								displayCurrency={this.props.displayCurrency}
								items={this.props.cryptoCurrenciesData}
							/>
						</tbody>
					</table>
				)}
			</>
		);
	}
}

const mapStateToProps = (state:AppState):CryptoCurrenciesProps => ({
	cryptoCurrenciesData: state.cryptoCurrenciesData,
	displayCurrency: state.displayCurrency,
	isLoading: state.isLoading,
	isError: state.isError,
});

export default connect(mapStateToProps, { getCryptoCurrencies })(CryptoCurrencies);
