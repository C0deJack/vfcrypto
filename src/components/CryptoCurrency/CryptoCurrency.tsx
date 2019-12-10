import React, { Component } from 'react';
import { CryptoCurrencyId, DisplayCurrency, CryptoCurrencyData, IsLoading, IsError, AppState } from '../../types';
import { getCryptoCurrency } from '../../actions/getCryptoCurrency';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

import './CryptoCurrency.scss';

export interface CryptoCurrencyProps {
    cryptoCurrencyData: CryptoCurrencyData;
    cryptoCurrencyId: CryptoCurrencyId;
    displayCurrency: DisplayCurrency;
    isLoading: IsLoading;
    isError: IsError;
    match: any;
}

interface CryptoCurrencyDispatches {
    getCryptoCurrency: (cryptoCurrencyId: CryptoCurrencyId, displayCurrency: DisplayCurrency) => void;
}

export type CombinedProps = CryptoCurrencyProps & CryptoCurrencyDispatches;

export class CryptoCurrency extends Component<CombinedProps> {

    componentWillMount() {
        this.props.getCryptoCurrency(this.props.match.params.cryptoCurrency, this.props.displayCurrency)
    }

    render() {
        console.log(this.props.cryptoCurrencyData);
        return (
            <>
                {this.props.isError ? <Error />
                    : (
                        this.props.isLoading ? <Loading />
                            : (
                                <div className="crypto-currency">
                                    <h2>CryptoCurrency</h2>
                                    <h3>TEST CURRENCY ID: {this.props.cryptoCurrencyData[0].id}</h3>
                                </div>
                            )
                    )
                }
            </>

        )
    }
}

const mapStateToProps = (state: AppState, props): CryptoCurrencyProps => ({
    cryptoCurrencyData: state.cryptoCurrencyData,
    cryptoCurrencyId: state.cryptoCurrencyId,
    displayCurrency: state.displayCurrency,
    isLoading: state.isLoading,
    isError: state.isError,
    match: props.match
})

export default connect(mapStateToProps, { getCryptoCurrency })(CryptoCurrency);
