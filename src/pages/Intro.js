import React from "react";
import {
  Main,
  Container,
  InnerContainer,
  Right,
  Left,
  Top,
  Bottom,
  Back,
} from "../styled/IntroPageStyles";

const Intro = () => {
  return (
    <Main>
      <Container>
        <InnerContainer>
          <Right />
          <Left />
          <Top />
          <Bottom />
          <Back />
        </InnerContainer>
        <InnerContainer>
          <Right />
          <Left />
          <Top />
          <Bottom />
          <Back />
        </InnerContainer>
      </Container>
    </Main>
  );
};

export default Intro;
