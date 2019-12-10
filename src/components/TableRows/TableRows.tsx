import React from 'react'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format';

import './TableRows.scss';

const appConfig = require('../../appConfig.json');
const arrowUp = require('../../assets/arrowUp.svg');
const arrowDown = require('../../assets/arrowDown.svg');

const displayCurrenciesMap = appConfig.displayCurrencies;

function TableRows(props) {

    return (
        <>
            {props.items.map(item => (
                <tr className="table-rows" key={item.name}>
                    <td className="table-rows__data table-rows__data-left">
                        <Link to={item.name} className="table-rows__link">
                            {item.rank}  {item.name}
                        </Link>
                    </td>
                    <td className="table-rows__data">
                        <Link to={item.name} className="table-rows__link">
                            <NumberFormat 
                                value={item.price_usd}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={displayCurrenciesMap[props.displayCurrency]}
                                decimalScale={2}
                            />
                        </Link>
                    </td>
                    <td className="table-rows__data">
                        <Link to={item.name} className="table-rows__link">
                            <NumberFormat 
                                value={item.market_cap_usd}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={displayCurrenciesMap[props.displayCurrency]}
                                decimalScale={2}
                            />
                        </Link>
                    </td>
                    <td className="table-rows__data table-rows__data-right">
                        <Link
                            to={item.name}
                            className={item.percent_change_24h > 0 ?
                                "table-rows__link table-rows__data-green"
                                    : 
                                "table-rows__link table-rows__data-red"}>
                            <NumberFormat
                                value={item.percent_change_24h}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={'%'}
                                decimalScale={2}
                            />
                            {item.percent_change_24h > 0 ? 
                                <img className="table-rows__data-arrow" alt="up arrow icon" src={arrowUp} /> 
                                : 
                                <img className="table-rows__data-arrow" alt="down arrow icon" src={arrowDown} />
                            }
                        </Link>
                    </td>
                </tr>
            ))}
        </>
    )
}
    

export default TableRows;

