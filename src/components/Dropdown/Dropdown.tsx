import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';
import { getCryptoCurrency } from '../../actions/getCryptoCurrency';
import { setDisplayCurrency } from '../../actions/setDisplayCurrency';
import appConfig from '../../appConfig.json';
import arrowSvg from '../../assets/arrow.svg';
import { AppState, CryptoCurrencyId, DisplayCurrency, MyDispatch } from '../../types';

import './Dropdown.scss';

export interface DropdownProps {
	displayCurrency: DisplayCurrency;
	cryptoCurrencyId: CryptoCurrencyId;
}

export interface DropdownDispatches {
	setDisplayCurrency: (currency:DisplayCurrency) => void;
	getCryptoCurrencies: (displayCurrency:DisplayCurrency) => void;
	getCryptoCurrency: (cryptoCurrencyId:CryptoCurrencyId, displayCurrency:DisplayCurrency) => void;
}

export type CombinedProps = DropdownProps & DropdownDispatches;


export class Dropdown extends Component<CombinedProps> {

	public handleCurrencyChange = (dropdownValue:DisplayCurrency) => {
		this.props.setDisplayCurrency(dropdownValue);
		this.props.getCryptoCurrencies(dropdownValue);
		this.props.getCryptoCurrency(this.props.cryptoCurrencyId, dropdownValue);
	}

	public displayCurrencies = (Object.keys(appConfig.displayCurrencies) as DisplayCurrency[]);
	public render() {
		return (
			<div className='dropdown'>
				<select
					className='dropdown__select'
					// tslint:disable-next-line jsx-no-lambda
					onChange={e => this.handleCurrencyChange(e.target.value as DisplayCurrency)}
				>
					{this.displayCurrencies.map((item:DisplayCurrency, index) => {
						return <option key={index} value={item}>{item}</option>;
					})}
				</select>
				<img className='dropdown__arrow' alt='down arrow' src={arrowSvg} />
			</div>
		);
	}
}

const mapStateToProps = (state:AppState):DropdownProps => ({
	displayCurrency: state.displayCurrency,
	cryptoCurrencyId: state.cryptoCurrencyId,
});

const mapDispatchToProps = (dispatch:MyDispatch):DropdownDispatches => {
	return {
		setDisplayCurrency(displayCurrency:DisplayCurrency) {
			dispatch(
				setDisplayCurrency(displayCurrency),
			);
		},
		getCryptoCurrencies(displayCurrency:DisplayCurrency) {
			dispatch(
				getCryptoCurrencies(displayCurrency),
			);
		},
		getCryptoCurrency(cryptoCurrencyId:CryptoCurrencyId, displayCurrency:DisplayCurrency) {
			dispatch(
				getCryptoCurrency(cryptoCurrencyId, displayCurrency),
			);
		},
	};
};

const connector = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default connector;
