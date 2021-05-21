import React, { useState, useEffect } from "react";
import List from "./List";
const State = () => {
  const [data, setData] = useState([]);
  const getCoviddata = async () => {
    try {
      const response = await fetch("https://api.covid19india.org/data.json");
      const mainData = await response.json();
      setData(mainData.statewise);
      //console.log(data);
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
        <h2> Live Covid 19 Case Count statewise </h2>
        <div className="list-container">
          <List
            className="list-header"
            state="State"
            active="Active"
            confirmed="Confirmed"
            recovered="Recovered"
            deaths="Deaths"
            lastupdatedtime="Updated"
          />

          {data.map((val, index) => {
            if (index !== 31)
              return (
                <List
                  key={index}
                  dId={index}
                  className="data-list"
                  state={val.state}
                  active={val.active}
                  confirmed={val.confirmed}
                  recovered={val.recovered}
                  deaths={val.deaths}
                  lastupdatedtime={val.lastupdatedtime}
                />
              );
          })}
        </div>
      </div>
    </>
  );
};

export default State;
