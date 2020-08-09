import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
