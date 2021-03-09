import React from 'react';
import { Link } from 'react-router-dom';

const Upgrade = () => {
  const name = 'upgrade';
  const image = `/${name}.png`;

  const st = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  return (
    <div>
      <div className="title" style={st}>
        <div>
          <Link to="/services/">
            <span className="material-icons" style={{ fontSize: '1em', paddingTop: '10px' }}>keyboard_backspace</span>
          </Link>
        </div>
        <div>{name.toUpperCase()}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      <div className="content">
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }} >
          <div className="service-image-container">
            <img src={image} className="service-image" alt={`${name} service`} />
          </div>
        </div>
        <div>
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

export default Upgrade;
