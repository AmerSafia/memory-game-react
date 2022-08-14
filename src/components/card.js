import "./card.css";
import React from "react";

const Card = ({ card, handleChoice, flipped }) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} />
        <img
          className="back"
          onClick={() => handleChoice(card)}
          src="/img/cover.png"
          alt="card-back"
        />
      </div>
    </div>
  );
};

export default Card;
