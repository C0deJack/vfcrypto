import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Currencies from './components/CryptoCurrencies/CryptoCurrencies';
import Currency from './components/CryptoCurrency/CryptoCurrency';
import Header from './components/Header/Header';

import './App.scss';

const App: React.FC = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Currencies} />
        <Route path={"/:cryptoCurrency"} component={Currency} />
        <Route component={Currencies} />
      </Switch>
    </Router>
  );
}

export default App;
