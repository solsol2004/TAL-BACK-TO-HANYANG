import * as React from "react";
import "./CardPopuler.css";
import imageCard from "../../static/img/imageCard.svg";
const CardPopuler = (props) => {
  return (
    <div className={`card-populer ${props.className || ""}`}>
      <img className="image-card" src= {`${props.num || imageCard}`} />
      <div className="content">
        <div className="name-and-price">
          <span className="monkey">{props.monkey || "SAJA"}</span>
          <span className="num-043-eth">{props.num043Eth || "0.980ETH"}</span>
        </div>
        <button className="button-buy">
          <span className="buy-ticket">{props.buyTicket || "Buy Ticket"}</span>
        </button>
      </div>
    </div>
  );
};
export default CardPopuler;
