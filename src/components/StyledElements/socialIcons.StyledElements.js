import styled from 'styled-components'
import {  FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


export const FAInstagram=styled(FaInstagram)`
 transition:all 0.2s ease-in-out;
&:hover{    
    transition:all 0.2s ease-in-out;
    color:#8a3ab9;
} 

`;
export const FATwitter=styled(FaTwitter)`
 transition:all 0.2s ease-in-out;
&:hover{    
    transition:all 0.2s ease-in-out;
    color: #49a1eb;
} 


`;
export const FALinkedin=styled(FaLinkedin)`
 transition:all 0.2s ease-in-out;
&:hover{    
    transition:all 0.2s ease-in-out;
    color:#0e76a8; 
} 


`;
export const FAWhatsapp=styled(FaWhatsapp)`

transition:all 0.2s ease-in-out;
&:hover{    
    transition:all 0.2s ease-in-out;

    color:#075e54; 
} 

`;
export const FAGithub=styled(FaGithub)`
 transition:all 0.2s ease-in-out;
&:hover{    
    transition:all 0.2s ease-in-out;
    
    color:#6e5494; 
} 



`;




export const SocialIcons=styled.div` 
display:flex;
justify-content:space-between;
align-items:center;
width:240px;
`;
export const SocialIconLink=styled.a`
color:#fff;
font-size:2rem;
`;