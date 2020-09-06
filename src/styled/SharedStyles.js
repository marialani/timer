import styled, { keyframes } from "styled-components";

export const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

export const slideInBottom = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutBottom = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
`;

export const slideInTop = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutTop = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
`;

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: "Open Sans", sans-serif;
`;

export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  h1,
  h2 {
    color: #efeeee;
    font-weight: 800;
    font-size: 2rem;
    margin: 2rem;
    margin-bottom: 0;
    display: inline-block;
    text-shadow: 1px 1px darkslateblue;
  }
  h3 {
    color: #efeeee;
    font-size: 0.7rem;
    margin-bottom: 1vh;
    text-shadow: 1px 1px darkslateblue;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: whitesmoke;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 10px 20px;
    border-radius: 5px;
    background: linear-gradient(to right, #151c5e, #311a5d, #151c5e);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }
  a span {
    cursor: pointer;
    &:hover {
      color: aquamarine;
    }
  }
  hr {
    margin: 0.5vw 7vw 2vw 7vw;
    padding: 0.3vw;
    background: linear-gradient(transparent, whitesmoke, transparent);
    border: 0.5px solid darkslateblue;
    border-width: 0 0.5px 0.5px 0;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  color: white;
  background: url(${(props) => props.img}) no-repeat center;
  background-color: ${(props) => props.colour};
  border-radius: 10px;
  padding: 1vh 0.5vh;
  font-weight: bold;
  font-size: 0.7rem;
  outline: none;
  cursor: pointer;
`;
