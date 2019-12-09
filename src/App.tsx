import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Currencies from './Currencies/Currencies';
import Currency from './Currency/Currency';

import './App.scss';

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">TEST</div>
      <Switch>
        <Route exact path="/" component={Currencies} />
        <Route path={"/:cryptoCurrency"} component={Currency} />
        <Route component={Currencies} />
      </Switch>
    </Router>
  );
}

export default App;
