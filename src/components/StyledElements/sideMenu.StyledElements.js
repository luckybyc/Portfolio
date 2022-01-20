import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkScroll} from 'react-scroll'



export const SidebarContainer =styled.aside`

display:none;
@media screen and (max-width:768px){

position:fixed;
z-index:80;
width:100%;
height: 100vh;
background:#010606;
display: grid;
align-items:center;
top:0;
left: 0;
transition:0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen? '100%':'0')};
top:${({isOpen})=>(isOpen? '0':'-100%')}

}

`;

export const CloseIcon =styled(FaTimes)`
  color:#fff;
`;
export const Icon=styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none;
`;
export const SidebarMenu =styled.ul`
display:grid;
justify-content: center;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media screen and (max-width:768px){

 grid-template-rows:repeat(6,60px);

}

`;

export const SidebarWrapper=styled.div`
margin-top:4rem;
color:#fff;

height:100vh;

`;

export const SidebarLink=styled(LinkScroll)`
display:flex;
align-items:center;
justify-content:center;
font-size:1rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
color:#FFD700;
cursor: pointer;


&:hover{

    color:#fff;
    transition:0.2 ease-in-out;
}
`;


export const SidebtnWrap=styled.div`
         margin-top:6rem;

`;


export const SidebarScroll=styled(LinkScroll)`
border-radius:50px;
background:#FFD700;
white-space:nowrap;
padding:16px 64px;
color:#fff;
font-size:1rem;
outline:none;
border:none;
cursor: pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{

    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#FFD700;
}






`;





