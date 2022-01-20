import styled from "styled-components";

export const SkillCardSection = styled.div`
  width: max-content;
  padding: 8px 16px;
  height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 6px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: max-content;
    height: 100px;
  }
`;

export const SkillIcon = styled.div`
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`;



export const SkillName = styled.label`
   color:#000;
  font-size: 16px;
`;
