import React, { useState, useEffect } from "react";

const Covidtraker = () => {
  const [data, setData] = useState([]);
  const getCoviddata = async () => {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const mainData = await response.json();
      setData(mainData.statewise[0]);
      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCoviddata();
  }, []);
  return (
    <>
      <div className="main">
        <h2> Live Covid 19 Case Count </h2>
        <div className="content-wrapper">
          <div className="card state">
            <h3>India</h3>
            <p>Total State Data</p>
          </div>
          <div className="card activity">
            <h3>Total Active</h3>
            <p>{data.active}</p>
          </div>
          <div className="card confirmed">
            <h3>Total Confirmed</h3>
            <p>{data.confirmed}</p>
          </div>

          <div className="card recovery">
            <h3>Total Recovery</h3>
            <p>{data.recovered}</p>
          </div>
          <div className="card dathes">
            <h3>Total Deaths</h3>
            <p>{data.deaths}</p>
          </div>
          <div className="card time">
            <h3>Last Updated Time</h3>
            <p>{data.lastupdatedtime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covidtraker;
