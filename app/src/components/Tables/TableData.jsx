import React from "react";

function TableData(props) {
  return (
    <td className={props.className} colSpan={props.colSpan}>
      {props.children}
    </td>
  );
}

export default TableData;
