import React from "react";
import { SocialIcons,SocialIconLink} from "../StyledElements/socialIcons.StyledElements";
import { FAInstagram,FAWhatsapp,FAGithub,FATwitter,FALinkedin } from "../StyledElements/socialIcons.StyledElements";

const SocialContact = () => {
  return (
    <>
      <SocialIcons>
       
        <SocialIconLink href="/" target="_blank" aerial-label="Github">
          <FAGithub />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aerial-label="Whatsapp">
          <FAWhatsapp />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aerial-label="Twitter">
          <FATwitter /> 
          </SocialIconLink>

          <SocialIconLink href="/" target="_blank" aerial-label="Instagram">
          <FAInstagram />
        </SocialIconLink>
       
        <SocialIconLink href="/" target="_blank" aerial-label="Linkedin">
          <FALinkedin />
        </SocialIconLink>
      </SocialIcons>
    </>
  );
};

export default SocialContact;
