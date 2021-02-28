import React from 'react';

import './profile.css';

const Ali = () => {
  return (
    <div>
      <h2 className="title">ABOUT Ali</h2>
      <div className="content-container row">
        <div className="col-1" />
        <div className="profile-image col col-3">
          <img src="/ali_profile.png" className="image" />
        </div>
        <div className="about-ali col col-6">
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
  )
};

export default Ali;