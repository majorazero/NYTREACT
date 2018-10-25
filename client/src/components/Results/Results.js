import React from "react";
import "./Results.css";

const Results = (props) => {
  return(
    <div className="resultDiv">
      <h3><a href={props.loc}>{props.title}</a></h3>
      <h4>{props.descrip}</h4>
      <div>
        <button onClick={()=>{
            props.clickSave();
            //maybe ill just show it on the dom instead of restructuring this to stateful.
          }}>Save</button>
      </div>
    </div>
  );
}

export default Results;
