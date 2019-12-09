import React from 'react';
import { getCurrency } from '../services/api-service';

function Currency({match}:{match:any}) {

    getCurrency(match.params.cryptoCurrency)

    return (
        <div><h2>Currency</h2></div>
    )
}

export default Currency