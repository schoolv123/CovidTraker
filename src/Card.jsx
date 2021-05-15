import React, { useState } from "react";

const Card = () => {
  const [list, setList] = useState("");
  //const [item, setItem] = useState([]);
  const addInp = (event) => {
    setList(event.target.value);
    console.log(list);
  };
  return (
    <>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <input
            type="text"
            className="text-input"
            name="listItem"
            onChange={addInp}
            value={list}
            placeholder="Enter text hear"
          />
          <button className="add">+</button>
        </div>
      </div>
    </>
  );
};
export default Card;
