import React from "react";
import {
  TextContainer,
  TextContainer2,
  Button,
  Title,
  Paragraph,
  HomeClockSvg,
  Icon,
} from "../styled/HomePageStyles";

const HomeText = () => {
  return (
    <>
      <TextContainer>
        <TextContainer2>
          <Title>REACT TIMER</Title>
          <Paragraph>
            Save a list of laps using the stopwatch or set an alarm using the
            countdown timer
          </Paragraph>
        </TextContainer2>
        <TextContainer2>
          <HomeClockSvg className="animated lightSpeedIn" />
        </TextContainer2>
        <Button to="/stopwatch">
          <span>
            <Icon className="fa fa-arrow-down fa-2x arrow bounce"></Icon>
          </span>
        </Button>
      </TextContainer>
    </>
  );
};

export default HomeText;
