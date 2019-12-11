import React, { Component } from 'react'
import { connect } from "react-redux";
import { setDisplayCurrency } from '../../actions/setDisplayCurrency';
import { DisplayCurrency, AppState, CryptoCurrencyId } from '../../types';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';
import { getCryptoCurrency } from '../../actions/getCryptoCurrency';

import './Dropdown.scss';

const appConfig = require('../../appConfig.json');
const arrowSvg = require('../../assets/arrow.svg');

export interface DropdownProps {
    displayCurrency: DisplayCurrency;
    cryptoCurrencyId: CryptoCurrencyId;
}

export interface DropdownDispatches {
    setDisplayCurrency: (currency: DisplayCurrency) => void;
    getCryptoCurrencies: (displayCurrency: DisplayCurrency) => void;
    getCryptoCurrency: (cryptoCurrencyId: CryptoCurrencyId, displayCurrency: DisplayCurrency) => void;
}

export type CombinedProps = DropdownProps & DropdownDispatches;


export class Dropdown extends Component<CombinedProps> {

    handleCurrencyChange = (dropdownValue: DisplayCurrency) => {
        this.props.setDisplayCurrency(dropdownValue)
        this.props.getCryptoCurrencies(dropdownValue)
        this.props.getCryptoCurrency(this.props.cryptoCurrencyId, dropdownValue)
    };

    displayCurrencies = (Object.keys(appConfig.displayCurrencies) as DisplayCurrency[]);
    render() {
        return (
            <div className="dropdown">
                <select
                    className="dropdown__select"
                    onChange={e => this.handleCurrencyChange(e.target.value as DisplayCurrency)}
                >
                    {this.displayCurrencies.map((item: DisplayCurrency, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}
                </select>
                <img className="dropdown__arrow" alt="down arrow" src={arrowSvg} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppState): DropdownProps => ({
    displayCurrency: state.displayCurrency,
    cryptoCurrencyId: state.cryptoCurrencyId
});

const mapDispatchToProps = (dispatch): DropdownDispatches => {
    return {
        setDisplayCurrency(displayCurrency: DisplayCurrency) {
            dispatch(
                setDisplayCurrency(displayCurrency),
            );
        },
        getCryptoCurrencies(displayCurrency: DisplayCurrency) {
            dispatch(
                getCryptoCurrencies(displayCurrency),
            );
        },
        getCryptoCurrency(cryptoCurrencyId: CryptoCurrencyId, displayCurrency: DisplayCurrency) {
            dispatch(
                getCryptoCurrency(cryptoCurrencyId, displayCurrency),
            );
        },
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default connector;
