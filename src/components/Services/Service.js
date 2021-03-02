import React from 'react';

import './service.css';

const Service = ({ name, image }) => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={image} className="service-image" alt={`${name} service`}/>
      </div>
      <div>
        <div className="service-title">{name}</div>
        <div className="service-content">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. OMNES ENIM IUCUNDUM MOTUM,
          QUO SENSUS HILARETUR. QUAE CUM DIXISSET PAULUMQUE INSTITISSET, QUID EST? ECCE
          ALIUD SIMILE DISSIMILE. MIHI QUIDEM ANTIOCHUM, QUEM AUDIS, SATIS BELLE VIDERIS ATTENDERE.
          ATQUE HAEC ITA IUSTITIAE PROPRIA SUNT, UT SINT VIRTUTUM RELIQUARUM COMMUNIA. SIN KAKAN
          MALITIAM DIXISSES, AD ALIUD NOS UNUM CERTUM VITIUM CONSUETUDO LATINA TRADUCERET.
          DUO REGES: CONSTRUCTIO INTERRETE. AUT, PYLADES CUM SIS, DICES TE ESSE ORESTEM, UT
          MORIARE PRO AMICO?
        </div>
      </div>
    </div>
  );
};

export default Service;
