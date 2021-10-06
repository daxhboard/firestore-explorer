import React from "react";

function TableRow(props) {
  return <tr className={`${props.className}`}>{props.children}</tr>;
}

export default TableRow;
