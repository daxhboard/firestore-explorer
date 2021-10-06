import React from "react";
import "./Table.css";

function Table(props) {
  let col;
  if (props.col) {
    col = "col-" + props.col;
  } else col = "col-4";
  return (
    <table className={`bg-color container2 ${col}`}>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
