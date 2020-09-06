import styled from "styled-components";
import { Page, slideInRight, slideOutRight } from "./SharedStyles";

export const CountdownPageElm = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
      #151c5e 0%,
      #151c5e8c 10%,
      rgba(213, 120, 5, 0.26) 100%
    ),
    url(https://res.cloudinary.com/dmwyuc3gd/image/upload/dpr_auto,f_auto,q_auto/v1599314938/react%20timer/countdown-bkg_seer0s.jpg)
      no-repeat center;
  background-size: cover;
  &.page-enter {
    animation: ${slideInRight} 0.5s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s forwards;
  }
`;

export const Clock = styled.div`
  background-color: black;
  width: 50vw;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 30px;
  box-shadow: 10px -20px gray, 10px -5px gray, -1px -5px gray;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.div`
  display: flex;
  background-color: #151c5e;
`;

export const NavLink = styled.a`
  box-shadow: none;
`;

export const Input = styled.input`
  margin-bottom: 2rem;
  padding: 0.3vw;
  border-radius: 5px;
  font-size: 2rem;
  background: rgba(213, 120, 5, 0.13);
  border: 0.5px solid black;
  color: snow;
  text-align: center;
`;

export const Container = styled.div`
  margin-bottom: auto;
  padding-bottom: 15vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H3 = styled.h3`
  display: inline-block;
  margin: 1vw 2vw;
  font-size: 1.2rem !important;
`;

export const ClockDisplay = styled.div`
  font-size: 6vw;
  font-family: Digitaldream;
  color: red;
`;
