import React from 'react'
import { Link } from 'react-router-dom'

const appConfig = require('../../appConfig.json');

const displayCurrenciesMap = appConfig.displayCurrencies;

function TableRows(props) {

    return (
        <>
            {props.items.map(item => (
                <tr key={item.name}>
                    <td><Link to={item.name}>{item.rank}  {item.name}</Link></td>
                    <td><Link to={item.name}>{displayCurrenciesMap[props.displayCurrency]} {item.price_usd}</Link></td>
                    <td><Link to={item.name}>{displayCurrenciesMap[props.displayCurrency]} {item.market_cap_usd}</Link></td>
                    <td><Link to={item.name}>{item.percent_change_24h}</Link></td>
                </tr>
            ))}
        </>
    )
}

export default TableRows
