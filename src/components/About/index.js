import React from 'react';

import './index.css';

const About = () => {
  return (
    <div>
      <h2 className="title">ABOUT US</h2>
      <div className="content">
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. OMNES ENIM IUCUNDUM MOTUM,
        QUO SENSUS HILARETUR. QUAE CUM DIXISSET PAULUMQUE INSTITISSET, QUID EST? ECCE
        ALIUD SIMILE DISSIMILE. MIHI QUIDEM ANTIOCHUM, QUEM AUDIS, SATIS BELLE VIDERIS ATTENDERE.
        ATQUE HAEC ITA IUSTITIAE PROPRIA SUNT, UT SINT VIRTUTUM RELIQUARUM COMMUNIA. SIN KAKAN
        MALITIAM DIXISSES, AD ALIUD NOS UNUM CERTUM VITIUM CONSUETUDO LATINA TRADUCERET.
        DUO REGES: CONSTRUCTIO INTERRETE. AUT, PYLADES CUM SIS, DICES TE ESSE ORESTEM, UT
        MORIARE PRO AMICO?

        <div className="images">
          <div className="image-container left-image">
            <img src="/ali_profile.png" className="image" />
          </div>
          <div className="image-container right-image">
            <img src="/polina_profile.jpeg" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
