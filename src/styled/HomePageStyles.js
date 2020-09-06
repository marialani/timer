import styled, { keyframes } from "styled-components";
import { Page, slideInTop, slideOutTop } from "./SharedStyles";
import { NavLink } from "react-router-dom";
import { ReactComponent as ClockSvg } from "../assets/svg/clock.svg";

export const HomePageElm = styled(Page)`
  max-width: 100%
  max-height: 100vh;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  &.page-enter {
    animation: ${slideInTop} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutTop} 0.5s forwards;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const TextContainer2 = styled(TextContainer)`
  min-height: auto;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled(NavLink)`
  background: none !important;
  font-weight: bold;
  font-size: 0.8rem !important;
  border-radius: 50% !important;
  width: 10vh;
  height: 10vh;
  display: flex !important;
  color: #fff !important;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 10%;
  border: 3px solid darkslateblue;
`;

const FadeInBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(20%);
}
to { opacity: 1 };
`;

export const Title = styled.h1`
  font-size: 3rem !important;
  width: 100%;
  padding: 0px 2rem 0px 5rem;
  animation: ${FadeInBottom} 1s both;
  animation-delay: 0.5s;
  @media (max-width: 768px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

export const Paragraph = styled.p`
  text-align: left;
  color: whitesmoke;
  padding: 0.5rem 2rem 0.5rem 5rem;
  font-weight: 600;
  font-family: sans-serif;
  font-size: 1.2rem;
  text-shadow: darkslateblue 1px 1px;
  animation: ${FadeInBottom} 1s both;
  animation-delay: 1s;
  @media (max-width: 768px) {
    max-width: 80%;
    padding: 1rem 2rem 2rem 2rem;
  }
`;

const LightSpeedIn = keyframes`
0% {
  transform: translateX(100%) skewX(-30deg);
  opacity: 0;
}
60% {
  transform: translateX(-20%) skewX(30deg);
  opacity: 1;
}
80% {
  transform: translateX(0%) skewX(-15deg);
  opacity: 1;
}
100% {
  transform: translateX(0%) skewX(0deg);
  opacity: 1;
}
`;

export const HomeClockSvg = styled(ClockSvg)`
  width: 60%;
  height: auto;
  transform: scaleX(-1);
  animation: ${LightSpeedIn} 0.5s ease-out 1s both;
  @media (max-width: 768px) {
    width: 35%;
  }
`;

const Bounce = keyframes`
0%,
20%,
50%,
80%,
100% {
  transform: translateY(0);
}
40% {
  transform: translateY(10%);
}
60% {
  transform: translateY(20%);
}
`;

export const Icon = styled.i`
  animation: ${Bounce} 2s infinite;
  transform: translateY(-5%);
`;
