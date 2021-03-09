import React from 'react';

import './service.css';
import { Link } from 'react-router-dom';

const Service = ({ name, image, currentService, setCurrentService }) => {
  console.log(currentService)
  const displayClass = currentService === name || !currentService ? 'display-for-small-screen' : 'hide-for-small-screen'
  const animation = currentService === name ? 'service-click-animation' : '';
  const displaySingle = currentService === name ? 'display-single' : '';
  const textAnimation = currentService === name ? 'service-click-text-animation' : '';
  const serviceContainer = `service-container ${displayClass} ${displaySingle}`;

  return (
    <div className={serviceContainer} onClick={() => setCurrentService(name)}>
      <Link to={`/services/${name}`} className="service-link">
        <div className={`service-image-title-container ${animation}`}>
          <div className="service-image-container">
            <img src={image} className="service-image" alt={`${name} service`}/>
          </div>
          <div className="service-title">{name}</div>
        </div>
      </Link>
      <div className={`service-content ${textAnimation}`}>
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. OMNES ENIM IUCUNDUM MOTUM,
        QUO SENSUS HILARETUR. QUAE CUM DIXISSET PAULUMQUE INSTITISSET, QUID EST? ECCE
        ALIUD SIMILE DISSIMILE. MIHI QUIDEM ANTIOCHUM, QUEM AUDIS, SATIS BELLE VIDERIS ATTENDERE.
        ATQUE HAEC ITA IUSTITIAE PROPRIA SUNT, UT SINT VIRTUTUM RELIQUARUM COMMUNIA. SIN KAKAN
        MALITIAM DIXISSES, AD ALIUD NOS UNUM CERTUM VITIUM CONSUETUDO LATINA TRADUCERET.
        DUO REGES: CONSTRUCTIO INTERRETE. AUT, PYLADES CUM SIS, DICES TE ESSE ORESTEM, UT
        MORIARE PRO AMICO?
      </div>
    </div>
  );
};

export default Service;
