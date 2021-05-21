import React, { useState } from "react";
const Count = () => {
  const [num, setNum] = useState(0);
  const clicker = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div className="container">
        <h1> I am ready for react </h1>
        <p> I will count the number {num} </p>
        <button className="clicker" onClick={clicker}>
          Increment
        </button>
      </div>
    </>
  );
};

export default Count;
