import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>call</LinkTitle>
        <LinkItem href='tel:651095593'>641095593</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:duverwild@gmail.com'>duverwild@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
       <Slogan>Innovating one project at a time</Slogan>
       </CompanyContainer>
       <SocialContainer>
         
     <SocialIcons href='https://github.com/elduverx'>
      <AiFillGithub size='3rem'/>
     </SocialIcons>
     <SocialIcons href='https://www.linkedin.com/in/duverney-muriel-react-developer/'>
      <AiFillLinkedin size='3rem'/>
     </SocialIcons>
     <SocialIcons href='https://www.instagram.com/duverbarber/'>
      <AiFillInstagram size='3rem'/>
     </SocialIcons>
       </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
