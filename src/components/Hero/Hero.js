import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There <br/>
        I am Pedro
      </SectionTitle>
      <SectionText>
        React Frontend Developer focused in help people making shining on the internet
      </SectionText>
      <Button onClick={()=> window.location = 'mailto:duverwild@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;