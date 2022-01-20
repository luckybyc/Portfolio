import styled from 'styled-components'


export const ProjectsTitle=styled.p`
  color: #ffd700;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ProjectsContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
  height: 1000px;    
  background: ${({ lightBg }) => (lightBg ? "#fff " : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

`
;
export const ProjectContainerWrapper=styled.div`
 display: flex;
flex-direction:column;
margin-bottom: 15px;
padding: 0 15px;
max-width: 1100px;
width:100%;

`;