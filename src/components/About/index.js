import React from 'react';

import '../Common/index.css';
import './index.css';
import ProfilePicture from './ProfilePicture';

const About = () => {
  const profiles = [
    {
      image: '/ali_profile_2.png',
      alt: 'Ali\'s profile',
      url: 'https://www.linkedin.com/in/ali-zand-bb469115/',
    },
    {
      image: '/polina_profile.jpeg',
      alt: 'Polina\'s profile',
      url: 'https://www.linkedin.com/in/polina-gorshenina/',
    },
  ];
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
          {profiles.map((profile) => {
            return <ProfilePicture key={profile.url} {...profile} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
