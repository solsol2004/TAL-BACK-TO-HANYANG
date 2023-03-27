import React from "react";
import "./style.css";

export const Discord = ({ style, simpleIconsOpenseaStyle, simpleIconsOpensea = "/img/simple-icons-opensea-1.svg" }) => {
  const handleClick = () => {
    window.location.href = "https://opensea.io/";
  };

  return (
    <div className={"discord-discord"} style={style} onClick={handleClick}>
      <img className={"discord-img"} style={simpleIconsOpenseaStyle} src={simpleIconsOpensea} />
    </div>
  );
};