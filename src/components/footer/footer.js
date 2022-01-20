import React from "react";
import Logo from "../common/logo";
import SocialContact from "../common/socialcontact";
import {
  FooterContainer,
  FooterWrap,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  SiteRights,
} from "../StyledElements/footer.StyledElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo>
                <Logo />
              </SocialLogo>
              <SiteRights> ©{new Date().getFullYear()} All Rights Reserved.</SiteRights>
              <SocialContact />
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
