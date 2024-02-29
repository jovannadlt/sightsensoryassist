//ask ai, using chatgpt// About.js

import React from 'react';
import "./style.css";
import { Image , Text} from 'react-native';
const About = () => {
  return (
    <div>
      <main className="main">
        <section className="big-text">
          <h1>Coming Soon</h1>
          </section>
      </main>
<div style={{marginBottom:"100%"}}>
      <section className="main-two">
  <Image source={require('../images/sm2-removebg-preview.png')} style={{ width: 200, height: 100, resizeMode: 'contain'}} />
</section>
</div>
    </div>
  );
};

export default About;
