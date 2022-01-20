import styled from "styled-components";

export const InfoContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
  height: 860px;    
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#eff0f1")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;




export const SkillsWrapper = styled.div`
display: flex;
flex-direction:column;
margin-bottom: 15px;
padding: 0 15px;
max-width: 1100px;
width:100%;
`;

export const SkillsTitle=styled.p`
  color: #ffd700;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


export const SkillsContainer=styled.div`

`;
export const SkillsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillsSectionTitle = styled.label`
  color:#000;  
  font-size: 24px;
  font-weight: 600;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
  }
`;
