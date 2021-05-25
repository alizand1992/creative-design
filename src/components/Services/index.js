import React, { useState } from 'react';

import '../Common/index.css';
import './index.css';

import Consult from './Consult';
import Design from './Design';
import Code from './Code';
import Upgrade from './Upgrade';

const Services = () => {
  return (
    <div style={{ height: '100vh' }} id="services">
      <h2 className="title">OUR SERVICES</h2>
      <div className="content">
        <div style={{ display: 'flex' }}>
          <Design />
          <Code />
        </div>
        <div>
          <Consult />
          <Upgrade />
        </div>
      </div>
    </div>
  )
};

export default Services
