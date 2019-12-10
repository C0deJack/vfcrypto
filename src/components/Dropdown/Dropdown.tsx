import React from 'react'
import { connect } from "react-redux";
import { setDisplayCurrency } from '../../actions/setDisplayCurrency';
import { DisplayCurrency, AppState } from '../../types';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';

import './Dropdown.scss';

const appConfig = require('../../appConfig.json');
const arrowSvg = require('../../assets/arrow.svg');

export interface DropdownProps {
    displayCurrency: DisplayCurrency;
}

export interface DropdownDispatches {
    setDisplayCurrency: (currency:DisplayCurrency) => void;
    getCryptoCurrencies: (displayCurrency: DisplayCurrency) => void;
}

export type CombinedProps = DropdownProps & DropdownDispatches;

export function Dropdown(props:CombinedProps) {
    
    const handleCurrencyChange = (dropdownValue: DisplayCurrency) => {
        props.setDisplayCurrency(dropdownValue)
        props.getCryptoCurrencies(dropdownValue)
    };

    const displayCurrencies = (Object.keys(appConfig.displayCurrencies) as DisplayCurrency[]);

    return (
        <div  className="dropdown">
            <select
                className="dropdown__select"
                onChange={e => handleCurrencyChange(e.target.value as DisplayCurrency)}
                >
                {displayCurrencies.map((item:DisplayCurrency, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
            <img className="dropdown__arrow" src={arrowSvg} />
        </div>
    )
}

const mapStateToProps = (state:AppState):DropdownProps => {
    return {
        displayCurrency: state.displayCurrency
    }
};

const mapDispatchToProps = (dispatch):DropdownDispatches => {
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
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps)(Dropdown);
export default connector;

