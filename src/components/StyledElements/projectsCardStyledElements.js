
import styled from 'styled-components'


export const ProjectCardContainer=styled.div`
   display: flex;
   margin: 16px 0px;
   padding: 8px 0px;
   align-items:center;
   justify-content:space-between;
   @media screen and (max-width: 768px) {
     justify-content:center;
    flex-direction:column-reverse;

}
 ` ;

export const ImgWrap = styled.div`
max-width: 555px;

`;

export const Img = styled.img`
max-width: 460px;
max-height: 360px;
margin: 0 0 10px 0;
padding-right: 0;
@media screen and (max-width: 768px) {
    
    width: 100%;


}
`;

 
 export const ProjectsInfo= styled.div`
  max-width: 540px;
 

   @media screen and (max-width:768px){

      margin-left: 0px;
      margin-top: 12px;
   }
 
 `;

 export const ProjectTitle=styled.label`
 
  color:#000;  
  font-size: 24px;
  font-weight: 600;
 
 `; 
  
export const ProjectTags=styled.div`
    display: flex;
    max-width: 60%;
    flex-wrap:wrap;

    @media screen and (max-width:768px){
      max-width: 100%;
    }
    

`; 


  export const Tag=styled.label` 
  padding: 4px 8px;
  background-color:  #ffd700;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 4px;`
  
  ;
  
export const ProjectLink=styled.a`
text-decoration: none;
    color: #000;
    `;

export const ProjectLinks=styled.div`
    margin-top: 6px;
    margin-bottom:10px;
    display: flex;

`;
export const LinkButton=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    background-color:  #ffd700;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 6px;


    .i {
    display: flex;
    align-items: center;
    margin-right: 4px;
  }
`; 
  
  

  