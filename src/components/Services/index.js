import React from 'react';

import '../Common/index.css';
import './index.css';

import Consult from './Consult';
import Design from './Design';
import Code from './Code';
import Upgrade from './Upgrade';

const Services = () => {
  return (
    <div style={{ display: 'block', minHeight: '1200px', paddingTop: '100px' }} id="services">
      <h2 className="title">OUR SERVICES</h2>
      <div className="content">
        <div style={{ display: 'flex', marginBottom: '40px' }}>
          <Design />
          <Code />
        </div>
        <div style={{ display: 'flex'}}>
          <Consult />
          <Upgrade />
        </div>
      </div>
    </div>
  );
};

export default Services
