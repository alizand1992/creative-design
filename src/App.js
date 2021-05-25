import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Loading from './components/Common/Loading';
import Menu from './components/Menu';


const Services = React.lazy(() => import('./components/Services'));
const Design = React.lazy(() => import('./components/Services/Design'));
const Code = React.lazy(() => import('./components/Services/Code'));
const Consult = React.lazy(() => import('./components/Services/Consult'));
const Upgrade = React.lazy(() => import('./components/Services/Upgrade'));
const ContactUs = React.lazy(() => import('./components/ContactUs'));

const About =  React.lazy(() => import('./components/About'));

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
              <About />
              <Services />
              <ContactUs />
            </Route>
            <Route path="/services/design" >
              <Design />
            </Route>
            <Route path="/services/code" >
              <Code />
            </Route>
            <Route path="/services/consult" >
              <Consult />
            </Route>
            <Route path="/services/upgrade" >
              <Upgrade />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
