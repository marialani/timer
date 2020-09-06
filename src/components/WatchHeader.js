import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, HeaderDiv, Span } from "../styled/TimerPageStyles";

const WatchHeader = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState(null);

  let timeout;
  function getTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    setTime(h + ":" + m + ":" + s);
    timeout = setTimeout(getTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  if (time === "00:00:00") {
    getDate();
  }

  function getDate() {
    let d = new Date();
    let n = d.toUTCString();
    n = n.toUpperCase().split(" ").slice(0, 3);
    setDate(n);
  }

  function getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=75e9d00aea37aa19a48a475b34604c83`
      )
      .then((res) => setTemp(res.data));
  }

  useEffect(() => {
    getTime();
    getDate();
    getWeather();
    return () => {
      clearInterval(timeout);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Header>
      {temp && (
        <div>
          <HeaderDiv size="1.3vw">
            <Span color="cyan" size="1.7vw" weight="bold">
              {Math.round(temp.main.temp)} &#8451;
            </Span>
            <br />
            LDN, {temp && temp.weather[0].description}
          </HeaderDiv>
          <img
            src={`https://openweathermap.org/img/w/${temp.weather[0].icon}.png`}
            alt="temperature"
          />
        </div>
      )}
      <div>
        <HeaderDiv size="1.3vw">
          <Span color="orangered" size="2vw" weight="800">
            {date && date[0].slice(0, date[0].length - 1)}{" "}
          </Span>
          {date && date[1] + " " + date[2]}
        </HeaderDiv>
        <HeaderDiv size="3vw" weight="bold" family="Liberation">
          {time && time}
        </HeaderDiv>
      </div>
    </Header>
  );
};

export default WatchHeader;
