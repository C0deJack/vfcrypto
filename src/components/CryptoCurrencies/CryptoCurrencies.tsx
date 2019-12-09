import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';
import { AppState, DisplayCurrency, IsLoading, IsError, CryptoCurrenciesData } from '../../types';
import TableRows from '../TableRows/TableRows';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

interface CryptoCurrenciesProps {
    cryptoCurrenciesData: CryptoCurrenciesData;
    displayCurrency: DisplayCurrency;
    isLoading: IsLoading;
    isError: IsError
}

interface CryptoCurrenciesDispatches {
    getCryptoCurrencies: (displayCurrency: DisplayCurrency) => void;
}

export type CombinedProps = CryptoCurrenciesProps & CryptoCurrenciesDispatches;

class CryptoCurrencies extends Component<CombinedProps> {
    componentWillMount() {
        this.props.getCryptoCurrencies(this.props.displayCurrency)
    }
    // static getDerivedStateFromProps(props: CryptoCurrenciesDispatches) {
    //     props.getCryptoCurrencies(this.props.displayCurrency)
    //   }

    render() {
        return (
            <>
                <h3>CryptoCurrencies</h3>
                <h4>{this.props.displayCurrency}</h4>
                {this.props.isError ? <Error />
                    : (
                    this.props.isLoading ? <Loading /> 
                        : (
                        <table>
                            <thead>
                                <tr>
                                    <th>CRYPTOCURRENCY</th>
                                    <th>PRICE</th>
                                    <th>MARKET CAP</th>
                                    <th>24HR CHANGE</th>
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
