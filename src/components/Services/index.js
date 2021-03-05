import React, { useState } from 'react';

import '../Common/index.css';
import './index.css';

import Service from './Service';

const Services = () => {
  const [currentService, setCurrentService] = useState();
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
            return <Service {...service} key={service.name} currentService={currentService} setCurrentService={setCurrentService} />
          })}
        </div>
      </div>
    </div>
  )
};

export default Services
