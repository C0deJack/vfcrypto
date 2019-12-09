import React from 'react';
import { getCurrencies, getCurrency } from './services/api-service';

import './App.scss';

const App: React.FC = () => {

  getCurrencies('JPY');

  getCurrency('bitcoin', 'KRW')

  return (
    <div className="App">TEST</div>
  );
}

export default App;
