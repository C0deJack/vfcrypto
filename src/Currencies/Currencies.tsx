import React from 'react';
import { getCurrencies } from '../services/api-service';
import { Link } from 'react-router-dom';

function Currencies() {

    getCurrencies();

    const bit = 'bitcoin';
    const lite = 'litecoin';
    
    return (
        <div>
            <h2>Currencies</h2>
            <ul>
                <Link to={bit}><li>{bit}</li></Link>
                <Link to={lite}><li>{lite}</li></Link>
            </ul>
        </div>
    )
}

export default Currencies

