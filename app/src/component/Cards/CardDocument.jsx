import React from "react";
import "./Cards.css";

function CardDocument(props) {
  return (
    <div className="card card-items w-25 mt-5 shadow text-center">
      <div className="card-body">
        <h5 className="card-title clr-2727 pt-7">{props.cardTitle}</h5>
        <span className="clr-2">{props.cardId}</span>
      </div>
    </div>
  );
}
export default CardDocument;
