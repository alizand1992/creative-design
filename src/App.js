import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';
import Services from './components/Services';
import Loading from './components/Common/Loading';

const About =  React.lazy(() => import('./components/About'));
const Ali =  React.lazy(() => import('./components/About/Ali'));
const Polina =  React.lazy(() => import('./components/About/Polina'));

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/about/ali">
              <Ali />
            </Route>
            <Route path="/about/polina">
              <Polina />
            </Route>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/services" >
              <Services />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
