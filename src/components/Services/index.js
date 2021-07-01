import React from 'react';

import '../Common/index.css';
import './index.css';

import Consult from './Consult';
import Design from './Design';
import Code from './Code';
import Upgrade from './Upgrade';

const Services = () => {
  return (
    <div id="services">
      <h2 className="title">OUR SERVICES</h2>
      <div className="content">
        <div className="service-row with-margin">
          <Design />
          <Code />
        </div>
        <div className="service-row">
          <Consult />
          <Upgrade />
        </div>
      </div>
    </div>
  );
};

export default Services
