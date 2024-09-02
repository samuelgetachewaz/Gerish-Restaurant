import React from 'react';

import './Footer.css';
import {FooterOverlay, Newsletter, SubHeading} from '../../components';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { images } from '../../constants';
const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />,
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact</h1>
          <p className='p__opensans'><a href="#">9 W 53rd St, New York, NY 10019, USA</a></p>
          <p className='p__opensans'><a href="#">+1 212-344-1230</a></p>
          <p className='p__opensans'><a href="#">+1 212-344-1230</a></p>
      </div>
      <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="" />
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} className='spoon__img' alt=""  style={{marginTop: '15'}}/>
          <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter/>
          </div>

      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'> Working Hours</h1>
          <p className='p__opensans'><a href="#">Monday-Friday: 08:00 am -12:00 am</a></p>
          <p className='p__opensans'><a href="#">Saturday-Sunday: 07:00am -11:00 pm
          </a></p>
      </div>
    </div>
    <div className='footer-copyright'>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>

    </div>
  </div>
);

export default Footer;
