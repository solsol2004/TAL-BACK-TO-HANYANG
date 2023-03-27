import React from "react";
import "./style.css";

export const Twitter = ({ style, mdiInstagramStyle, mdiInstagram = "/img/mdi-instagram-1.svg" }) => {
  const handleClick = () => {
    window.location.href = "https://www.instagram.com";
  };
  
  return (
    <div className={"twitter-twitter"} style={style} onClick={handleClick}>
      <img className={"twitter-img"} style={mdiInstagramStyle} src={mdiInstagram} />
    </div>
  );
};
