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
const Ali =  React.lazy(() => import('./components/About/Ali'));
const Polina =  React.lazy(() => import('./components/About/Polina'));

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Suspense fallback={<Loading />}>
           {/*<Route path="/about/ali">*/}
            {/*  <Ali />*/}
            {/*</Route>*/}
            {/*<Route path="/about/polina">*/}
            {/*  <Polina />*/}
            {/*</Route>*/}
            {/*<Route path="/about" >*/}
            {/*<Route path="/">*/}
              <Home />
            {/*</Route>*/}
              <About />
            {/*<Route path="/services" >*/}
              <Services />
            {/*</Route>*/}
            {/*<Route path="/contact_us" >*/}
              <ContactUs />
            {/*</Route>*/}
            {/*</Route>*/}
          <Switch>
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
