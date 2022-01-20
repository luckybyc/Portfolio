import React from "react";
import { SocialIcons,SocialIconLink} from "../StyledElements/socialIcons.StyledElements";
import { FAInstagram,FAWhatsapp,FAGithub,FATwitter,FALinkedin } from "../StyledElements/socialIcons.StyledElements";

const SocialContact = () => {
  return (
    <>
      <SocialIcons>
       
        <SocialIconLink href="https://github.com/luckybyc/" target="_blank" aerial-label="Github">
          <FAGithub />
        </SocialIconLink>
        <SocialIconLink href="https://api.whatsapp.com/send/?phone=255715399800&text&app_absent=0" target="_blank" aerial-label="Whatsapp">
          <FAWhatsapp />
        </SocialIconLink>
        <SocialIconLink href="https://twitter.com/luckybyc/" target="_blank" aerial-label="Twitter">
          <FATwitter /> 
          </SocialIconLink>

          <SocialIconLink href="https://www.instagram.com/__lusajo/" target="_blank" aerial-label="Instagram">
          <FAInstagram />
        </SocialIconLink>
       
        <SocialIconLink href="https://www.linkedin.com/in/lusajo-malango-980a2298/" target="_blank" aerial-label="Linkedin">
          <FALinkedin />
        </SocialIconLink>
      </SocialIcons>
    </>
  );
};

export default SocialContact;
