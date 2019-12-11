import React, { Component } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CryptoData, AppState, DisplayCurrency } from '../../types';
import NumberFormat from 'react-number-format';

import './Header.scss';

const arrowLeftSvg = require('../../assets/arrowLeft.svg');
const appConfig = require('../../appConfig.json');
const displayCurrenciesMap = appConfig.displayCurrencies;

interface HeaderProps {
    cryptoCurrencyData: CryptoData;
    displayCurrency: DisplayCurrency;
}

class Header extends Component<HeaderProps> {

    render() {
        const data = this.props.cryptoCurrencyData[0];
        return (
            <div className="header">
                <Link className="header__link" to="/">
                    {data ?
                        <div className="header__currency">
                            <span className="header__currency-circle">
                                <img className="header__currency-arrow" alt="back arrow" src={arrowLeftSvg} />
                            </span>
                            <span className="header__currency-title">
                                <div>{data.name}</div>
                                <div className="header__currency-symbol">{data.symbol}</div>
                            </span>
                            <span className="header__currency-price">
                                <NumberFormat 
                                    value={data.price_usd}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={displayCurrenciesMap[this.props.displayCurrency]}
                                    decimalScale={2}
                                />
                            </span>
                        </div>
                         :
                        <h1 className="header__title">VFCrypto</h1>
                    }
                </Link>
                <Dropdown />
            </div>
        )
    }
}

const mapStateToProps = (state: AppState): HeaderProps => ({
    cryptoCurrencyData: state.cryptoCurrencyData,
    displayCurrency: state.displayCurrency
})

export default connect(mapStateToProps)(Header);
