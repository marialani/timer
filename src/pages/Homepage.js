import React from "react";
import { HomePageElm } from "../styled/HomePageStyles";
import Lights from "../components/Lights";
import HomeText from "../components/HomeText";

const Homepage = () => {
  return (
    <>
      <HomePageElm img="https://res.cloudinary.com/dmwyuc3gd/image/upload/dpr_auto,f_auto,q_auto/v1599316281/react%20timer/home-bkg_nxztax.jpg">
        <Lights />
        <HomeText />
      </HomePageElm>
    </>
  );
};

export default Homepage;
