import styled, { keyframes } from "styled-components";

const Fade = keyframes`
  0%{
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Move = keyframes`
  0%{
    transform: translateZ(-500px) rotate(0deg);
  }
  100%{
    transform: translateZ(500px) rotate(0deg);
  }
`;

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
  &::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  perspective: 5px;
  perspective-origin: 50% 50%;
  position: relative;
`;

export const InnerContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 1000px;
  left: -500px;
  top: -500px;
  transform-style: preserve-3d;
  animation: ${Move} 12s infinite linear;
  animation-fill-mode: forwards;
  &::nth-child(2) {
    animation: move 12s infinite linear;
    animation-delay: 6s;
  }
`;

export const Wall = styled.div`
  background: url(https://res.cloudinary.com/dmwyuc3gd/image/upload/dpr_auto,f_auto,q_auto/v1599316281/react%20timer/home-bkg_nxztax.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  animation: ${Fade} 12s infinite linear;
  animation-delay: 0;
  &::nth-child(2) {
    animation-delay: 6s;
  }
`;

export const Right = styled(Wall)`
  transform: rotateY(90deg) translateZ(500px);
`;

export const Left = styled(Wall)`
  transform: rotateY(-90deg) translateZ(500px);
`;

export const Top = styled(Wall)`
  transform: rotateX(90deg) translateZ(500px);
`;

export const Bottom = styled(Wall)`
  transform: rotateX(-90deg) translateZ(500px);
`;

export const Back = styled(Wall)`
  transform: rotateX(180deg) translateZ(500px);
`;
