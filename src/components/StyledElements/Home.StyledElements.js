import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  height:100vh;

 &::before{
      content:'';
      top:0;
      left:0;
      right:0;
      bottom: 0;
      background: linear-graient(180deg, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
      z-index:2;
  }
`;


export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000002;
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeText=styled.div`
 display: flex;
`;

export const HomeH1 = styled.h1`
  font-weight: 700;
  color: #ffd700;
  font-size: 65px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HomeH2 = styled.h2`
  margin-top: 16px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 800px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
