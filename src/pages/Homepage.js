import React from "react";
import { HomePageElm } from "../styled/Lib";
import { Link } from "react-router-dom";
import Lights from "../components/Lights";
import HomeBkg from "../img/home-bkg.jpg";

const Homepage = () => {
  // }, [])

  return (
    <>
      <HomePageElm img={HomeBkg}>
        <Lights />
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>React Timer</h1>
          <Link to="/details">Go to Page Two →</Link>
        </div>
        {/* </Lights> */}
      </HomePageElm>
    </>
  );
};

export default Homepage;
