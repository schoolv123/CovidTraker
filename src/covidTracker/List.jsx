import React from "react";

const List = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="state-name">{props.state}</div>
        <div className="active"> {props.active} </div>
        <div className="confirmed"> {props.confirmed} </div>
        <div className="recovered"> {props.recovered} </div>
        <div className="deaths"> {props.deaths} </div>
        <div className="lastupdated"> {props.lastupdatedtime} </div>
        <div className="details">
          <button className="details">More</button>
        </div>
      </div>
    </>
  );
};

export default List;
