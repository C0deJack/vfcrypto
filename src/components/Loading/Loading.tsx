import React from 'react'
import './Loading.scss';

const loadingSvg = require('../../assets/loading.svg');

const Loading = () => {

    return (
        <div className="loading">
            <h3>LOADING</h3>
            <img src={loadingSvg} />
        </div>
    )
}

export default Loading;
