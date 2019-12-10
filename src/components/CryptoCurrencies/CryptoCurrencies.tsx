import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';
import { AppState, DisplayCurrency, IsLoading, IsError, CryptoCurrenciesData } from '../../types';
import TableRows from '../TableRows/TableRows';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

import './CryptoCurrencies.scss';

export interface CryptoCurrenciesProps {
    cryptoCurrenciesData: CryptoCurrenciesData;
    displayCurrency: DisplayCurrency;
    isLoading: IsLoading;
    isError: IsError
}

interface CryptoCurrenciesDispatches {
    getCryptoCurrencies: (displayCurrency: DisplayCurrency) => void;
}

export type CombinedProps = CryptoCurrenciesProps & CryptoCurrenciesDispatches;

export class CryptoCurrencies extends Component<CombinedProps> {
    componentWillMount() {
        this.props.getCryptoCurrencies(this.props.displayCurrency)
    }
    // static getDerivedStateFromProps(props: CryptoCurrenciesDispatches) {
    //     props.getCryptoCurrencies(this.props.displayCurrency)
    //   }

    render() {
        return (
            <>
                {this.props.isError ? <Error />
                    : (
                    this.props.isLoading ? <Loading /> 
                        : (
                        <table className="crypto-currencies__table">
                            <thead className="crypto-currencies__table-headers">
                                <tr>
                                    <th className="crypto-currencies__table-data crypto-currencies__table-left">CRYPTOCURRENCY</th>
                                    <th className="crypto-currencies__table-data">PRICE</th>
                                    <th className="crypto-currencies__table-data">MARKET CAP</th>
                                    <th className="crypto-currencies__table-data crypto-currencies__table-right">24HR CHANGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRows
                                    displayCurrency={this.props.displayCurrency} 
                                    items={this.props.cryptoCurrenciesData}
                                />
                            </tbody>
                        </table>
                        )
                    )
                    
                }
            </>
        )
    }
}

const mapStateToProps = (state: AppState): CryptoCurrenciesProps => ({
    cryptoCurrenciesData: state.cryptoCurrenciesData,
    displayCurrency: state.displayCurrency,
    isLoading: state.isLoading,
    isError: state.isError
})

export default connect(mapStateToProps, { getCryptoCurrencies })(CryptoCurrencies);
