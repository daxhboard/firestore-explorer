import React from "react";
import "./Table.css";

function ProjectTable(props) {
  return (
    <div class="d-flex border-bottom py-2">
      <div className="col-6">
        <span className="fw-500 mx-2">{props.projectName}</span>
      </div>
      <div className="col-6">
        <span className="mx-2">{props.projectId}</span>
      </div>
    </div>
  );
}
export default ProjectTable;
