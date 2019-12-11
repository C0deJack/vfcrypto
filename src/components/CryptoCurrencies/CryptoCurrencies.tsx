import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCryptoCurrencies } from '../../actions/getCryptoCurrencies';
import {
  AppState,
  DisplayCurrency,
  IsLoading,
  IsError,
  CryptoData
} from '../../types';
import TableRows from '../TableRows/TableRows';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { actionTimer } from '../../libs/actionTimer';

import './CryptoCurrencies.scss';

export interface CryptoCurrenciesProps {
  cryptoCurrenciesData: CryptoData;
  displayCurrency: DisplayCurrency;
  isLoading: IsLoading;
  isError: IsError;
}

interface CryptoCurrenciesDispatches {
  getCryptoCurrencies: (displayCurrency: DisplayCurrency) => void;
  actionTimer: () => any;
}

export type CombinedProps = CryptoCurrenciesProps & CryptoCurrenciesDispatches;

export class CryptoCurrencies extends Component<CombinedProps> {
  constructor(props) {
    super(props);

    actionTimer(() => {
      this.props.getCryptoCurrencies(this.props.displayCurrency);
    }, 60);
  }

  render() {
    return (
      <>
        {this.props.isError ? (
          <Error />
        ) : this.props.isLoading ? (
          <Loading />
        ) : (
          <table className="crypto-currencies__table">
            <thead className="crypto-currencies__table-headers">
              <tr>
                <th className="crypto-currencies__table-data crypto-currencies__table-left">
                  CRYPTOCURRENCY
                </th>
                <th className="crypto-currencies__table-data">PRICE</th>
                <th className="crypto-currencies__table-data">MARKET CAP</th>
                <th className="crypto-currencies__table-data crypto-currencies__table-right">
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

const mapStateToProps = (state: AppState): CryptoCurrenciesProps => ({
  cryptoCurrenciesData: state.cryptoCurrenciesData,
  displayCurrency: state.displayCurrency,
  isLoading: state.isLoading,
  isError: state.isError
});

export default connect(mapStateToProps, { getCryptoCurrencies })(
  CryptoCurrencies
);
