import React from "react";
import "./Results.css";

const Results = (props) => {
  return(
    <div className="resultDiv">
      <h3><a href={props.loc}>{props.title}</a></h3>
      <h4>{props.date}</h4>
      <h4>{props.descrip}</h4>
      <div>
        <button className={(props.clickSave !== undefined) ? "":"hide"} onClick={()=>{
            props.clickSave();
          }}>Save</button>
        <button className={(props.onDelete !== undefined) ? "":"hide"} onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Results;
