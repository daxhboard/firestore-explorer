import React from "react";
import "./table.css";

function Table(props) {
  return (
    <table className="bg-color container2 col-4">
      <tr className="display-on-hover">
        <td>{props.tableId}</td>
        <td className="text-end">
          <i className="fa fa-angle-right"></i>
        </td>
      </tr>
    </table>
  );
}

export default Table;
