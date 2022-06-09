import { convertToHsl } from 'daisyui/src/colors/functions';
import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
      <div style={{
        background:`url(${footerBg})`,
        backgroundSize: 'cover'
    }}>
            <footer  class="footer p-10 text-accent">
  <div>
    <span class="footer-title">Services</span> 
    <Link class="link link-hover" to='/'>Emergency Checkup</Link>
    <Link class="link link-hover" to='/'>Monthly Checkup</Link>
    <Link class="link link-hover" to='/'>Weekly Checkup</Link>
    <Link class="link link-hover" to='/'>Deep Checkup</Link>
  </div> 
  <div>
    <span class="footer-title">Oral Health</span> 
    <Link class="link link-hover" to='/'>Fluoride Treatment</Link>
    <Link class="link link-hover" to='/'>Cavity filling</Link>
    <Link class="link link-hover" to='/'>Whitening Teeth</Link>
  </div> 
  <div>
    <span class="footer-title">Our Address</span> 
    <p>Dhanmondi 32, Dhaka, Bangladesh</p>
  </div>
        
</footer>

<footer class="footer footer-center p-4 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved 'Laizu'</p>
  </div>
</footer>
      </div>
    );
};

export default Footer;