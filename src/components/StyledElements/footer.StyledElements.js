
import styled from "styled-components";

export const FooterContainer = styled.footer`
  
  background: #2E4053 ;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction:column;   
  justify-content:center;
  align-items:center; 
  margin:0 auto;
`;
export const SocialMedia = styled.section`

  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled.div`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
