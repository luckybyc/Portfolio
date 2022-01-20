import React from "react";
import {
  HomeContainer,
  HomeBg,
  ImageBg,
  HomeContent,
  HomeH1,
  HomeH2,
  HomeText
} from "../../StyledElements/Home.StyledElements";
import Image from "../../../assets/images/lusajo.png";

const Home = () => {
  return (
    <>
      <HomeContainer id="home">
        <HomeBg>
          <ImageBg src={Image} alt="background image" />;
        </HomeBg>
        <HomeContent>
        <HomeH1>Hello,</HomeH1>
        <HomeText>
          <HomeH1>I'm lusajo Malango</HomeH1>
          </HomeText>
          <HomeH2>Software Engineer from Dar es salaam, Tanzania</HomeH2>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Home;
