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
    <div id="about" style={{ height: '100vh' }}>
      <h2 className="title">ABOUT US</h2>
      <div className="content">
        We believe in the power of design that can tell your company’s story and technology that can
        materialize your ideas. We are a hardworking and dedicated team that utilizes our experience
        in design and implementation to transform your ideas into a developed product.

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
