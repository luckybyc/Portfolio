import React from "react";
import {
  Line,
  ServicesCard,
  ServicesWrapper,
  ServicesP,
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesH2,
} from "../../StyledElements/Services.StyledElements";
import AppIcon2 from "../../../assets/icons/appDev.svg";
import WebIcon1 from "../../../assets/icons/webDev.svg";
import UiIcon3 from "../../../assets/icons/ui.svg";
const Services = () => {
  return (
    <>
      <ServicesContainer id="Services">
        <ServicesH1>What I do </ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={WebIcon1} />
            <ServicesH2>Web Development</ServicesH2>
            <Line />
            <ServicesP>
            I design, create and maintain websites, 
            using the latest industry software to provide a superior 
            user experience that consistently delivers the customer base 
            that the website is seeking to attract.  
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={AppIcon2} />
            <ServicesH2>Mobile apps development</ServicesH2>
            <Line />
            <ServicesP>
            Looking for a software engineer to collaborate on developing your Mobile Apps! Hire me. I am 
            committed to offering scalable, cloud-ready and intuitive apps for mobile phones and tablets.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={UiIcon3} />
            <ServicesH2>UI/UX Design</ServicesH2>
            <Line />
            <ServicesP>
            Perfect designs coming from a perfect method of processing. 
            Here I am offering highly professional website designs 
            and mobile app designs that coming through systematic way 
            of UI UX Designing that deliver sense and beauty.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
