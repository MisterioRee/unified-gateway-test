import React from 'react';
import {
  CopyRight,
  FooterContainer,
  FooterLink,
  FooterRow,
  IconsContainer,
  NavLinksContainer,
} from './Footer.styles';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'assets/icons';
import { GREEN } from 'constants/index';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <NavLinksContainer>
          <FooterLink to={'/home'}>Home</FooterLink>
          <FooterLink to={'/service_request_form'}>
            Service Request Form
          </FooterLink>
          <FooterLink to={'/about_us'}>About Us</FooterLink>
          <FooterLink to={'/careers'}>Careers</FooterLink>
        </NavLinksContainer>
        <IconsContainer>
          <FacebookIcon color={GREEN} />
          <TwitterIcon color={GREEN} /> <InstagramIcon color={GREEN} />
        </IconsContainer>
      </FooterRow>

      <FooterRow>
        <CopyRight>© Copyright {new Date().getFullYear()}</CopyRight>
        <NavLinksContainer>
          <FooterLink to={'/terms_of_service'}>Home</FooterLink>
          <FooterLink to={'/privacy_policy'}>Service Request Form</FooterLink>
        </NavLinksContainer>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
