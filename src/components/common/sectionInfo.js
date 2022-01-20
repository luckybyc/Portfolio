import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle, 
  ImgWrap,
  Img,
  SocialContainer
 } from "../StyledElements/section.StyledElemnts";
import SocialContact from "./socialcontact";
const SectionInfo = ({lightBg,img,id,imgStart,topLine,lightText,darkText,description,alt}) => {
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} >  
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText }></Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              <SocialContainer>
                 <SocialContact/>
              </SocialContainer>
             
             
              </TextWrapper> 
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default SectionInfo;
