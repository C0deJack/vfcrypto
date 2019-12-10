import React from 'react'

import './Error.scss';

function Error() {
    return (
        <div className="error">
            <h2 className="error__title">Error</h2>
            <p>Sorry, we couldn't connect to Coin Market Cap.</p>
            <p>Please try and reload the page.</p>
            <p>If problems persist, please contact customer support on</p>
            <p>012345 6789 1011</p>
        </div>
    )
}

export default Error
