import * as React from 'react';

import s from './Footer.module.scss'
import { FooterItems } from './footerItems/FooterItems';
import { SocialItems } from './socialItems/SocialItems';

interface IFooterProps {
}

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer>
      <div className={s.footer_wrapper}>
        <div className={s.footer}>
          <FooterItems title='contact'>
            <a href="/contact">Make an inquiry</a>
          </FooterItems>
          <FooterItems title='social'>
            <SocialItems />
          </FooterItems>
          <FooterItems title='legal'>
            <a href="/privacy-policy/">Privacy | Cookies</a>
          </FooterItems>
          <FooterItems title='apparel'>
            <a href="https://apparel.archmotorcycle.com/">ARCH Apparel</a>
          </FooterItems>
          <FooterItems title='careers'>
            <a href="https://archmotorcycle.zohorecruit.com/jobs/Careers" target="_blank" rel="noreferrer noopener">Job Opportunities</a>
          </FooterItems>
        </div>
      </div>
    </footer>
  );
};
