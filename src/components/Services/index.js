import React from 'react';

import '../Common/index.css';
import './index.css';

import Service from './Service';

const Services = () => {
  const services = [
    { name: 'Design', image: '/design.png' },
    { name: 'Code', image: '/code.png' },
    { name: 'Consult', image: '/consult.png' },
    { name: 'Upgrade', image: '/upgrade.png' },
  ];

  return (
    <div>
      <h2 className="title">OUR SERVICES</h2>
      <div className="content">
        <div id="services-container">
          {services.map((service) => {
            return <Service {...service} />
          })}
        </div>
      </div>
    </div>
  )
};

export default Services
