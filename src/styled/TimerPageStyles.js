import styled, { keyframes } from "styled-components";
import {
  Page,
  slideInBottom,
  slideOutBottom,
  slideInLeft,
  slideOutLeft,
} from "./SharedStyles";

export const TimerPageElm = styled(Page)`
  display: flex;
  &.page-enter {
    animation: ${(props) =>
        props.direction && props.direction === "vertical"
          ? slideInBottom
          : slideInLeft}
      0.5s forwards;
  }
  &.page-exit {
    animation: ${(props) =>
        props.direction && props.direction === "vertical"
          ? slideOutBottom
          : slideOutLeft}
      0.5s forwards;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  background: url(${(props) => props.img}) no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media (max-width: 700px) {
    width: 100%;
    height: 70%;
  }
`;

export const SidePanelContainer = styled(Container)`
  width: 40%;
  background: linear-gradient(
    to bottom right,
    #151c5e 10%,
    #311a5d 40%,
    #bc88d9
  );
  justify-content: flex-start;
  @media (max-width: 700px) {
    width: 100%;
    height: 30%;
    padding-bottom: 1.5vh;
  }
`;

export const WatchDiv = styled(Container)`
  width: 80%;
  max-height: 70%;
  position: relative;
  @media (min-width: 380px) and (max-width: 700px) {
    width: 70%;
    height: auto;
  }
`;

export const WatchImgBkg = styled.img`
  width: 100%;
  height: auto;
`;

const Gradient = keyframes`
0%{background-position:0% 50%};
50%{background-position:100% 51%};
100%{background-position:0% 50%};
`;

export const Timer = styled.div`
  color: ${(props) => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-right: 2.5%;
  margin-top: 1.5%;
  border: 2px ridge gray;
  padding: 1.5rem;
  border-radius: 10%;
  height: 75%;
  background-color: black;
  position: absolute;
  background: linear-gradient(-45deg, #ee7752, #ef81ab, #17b4ec, #23d5ab);
  background-size: 1000% 1000%;
  animation: ${Gradient} 15s ease infinite;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const H3 = styled.h3`
  color: darkslateblue !important;
  border-bottom: 0.5px double darkslateblue;
  text-shadow: none !important;
}
`;

export const NavLink = styled.a`
  width: 50%;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const NavContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5vh;
`;

export const LapTimesDiv = styled.div`
  height: 80%;
  overflow-y: scroll;
  border: 0.25rem double darkslateblue;
  border-radius: 10px;
  padding: 1vh 2.5vh;
  width: 80%;
  background: linear-gradient(
    315deg,
    rgb(217, 217, 217) 0%,
    rgb(246, 242, 242) 74%
  );
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
`;

export const WatchDisplay = styled.div`
  font-size: 4vw;
  font-family: Digitaldream;
`;

export const HeaderDiv = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
`;

export const Span = styled.span`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

export const H2 = styled.h2`
  transform: translate(-50%, -50%);
  left: 50%;
  top: 10%;
  margin: 0 !important;
  position: absolute;
`;
