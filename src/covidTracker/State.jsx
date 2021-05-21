import React, { useState, useEffect } from "react";

const State = () => {
  const [data, setData] = useState([]);
  const getCoviddata = async () => {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const mainData = await response.json();
      setData(mainData.statewise[0]);
      console.log(mainData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCoviddata();
  }, []);

  return <></>;
};

export default State;
