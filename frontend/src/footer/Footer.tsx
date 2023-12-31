import * as React from 'react';

import s from './Footer.module.scss';
import { FooterItems } from './footerItems/FooterItems';
import { SocialItems } from './socialItems/SocialItems';

interface IFooterProps {};

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer>
      <div className={s.footer_wrapper}>
        <div className={s.footer}>
          <FooterItems title='contact'>
            <a href="https://archmotorcycle.com/contact/">Make an inquiry</a>
          </FooterItems>
          <FooterItems title='social'>
            <SocialItems />
          </FooterItems>
          <FooterItems title='legal'>
            <a href="https://archmotorcycle.com/privacy-policy/">Privacy | Cookies</a>
          </FooterItems>
          <FooterItems title='apparel'>
            <a href="https://apparel.archmotorcycle.com/">ARCH Apparel</a>
          </FooterItems>
          <FooterItems title='careers'>
            <a href="https://archmotorcycle.zohorecruit.com/jobs/Careers" target="_blank" rel="noreferrer noopener">Job Opportunities</a>
          </FooterItems>
        </div>
      </div>
      <div className={s.footer_info_wrapper}>
        <div className={s.footer_info}>
          © 2023 pet project disigned by <a href='https://github.com/SoulBright' target="_blank" rel="noopener noreferrer">Soul Bright</a>
        </div>
      </div>
    </footer>
  );
};
