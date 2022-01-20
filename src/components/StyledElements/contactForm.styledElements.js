import styled, {css} from "styled-components";
import { GrSend } from 'react-icons/gr';

export const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2C3E50;

`;

export const GRSend=styled(GrSend)`
margin-left: 1rem;
font-size:1.5rem;

`;

export const ContactWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin: 0 auto;
  width:100%;
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #FFD700;
  padding: 10px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const sharedStyled=css`

background-color:#eee;
height:40px;
border-radius: 5px;
border:1px solid #ddd;
margin:10px 0 20px 0;
padding:20px;
box-sizing:border-box;


`;



export const StyledFormWrapper=styled.div`
display:flex;
justify-content:center;
align-items: center;
width: 50%;
padding:0 20px;
margin-bottom:2rem;
@media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledForm=styled.form`
width:100%;
padding:40px;
background:#fff;
border-radius:10px;
box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);

label{
//

}

`;
export const StyledInput=styled.input`
display:block;
width:100%;
${sharedStyled}
`;



export const StyledTextArea=styled.textarea`
background:#eee;
width:100%;
min-height:100px;
resize: none; 
${sharedStyled}

`;


export const StyledButton=styled.button`

align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-size: 1.2rem;
  
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  
}
`
