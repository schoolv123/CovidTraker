import React, { useState, useEffect } from "react";
//import List from "./List";
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
    <div className="container-fluid">
      <div className="main">
        <h2> INDIA Live Covid 19 Case Count </h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th>State</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Updated</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => {
                if (index !== 31)
                  return (
                    <tr key={index}>
                      <th>{val.state}</th>
                      <td>{val.active}</td>
                      <td>{val.confirmed}</td>
                      <td>{val.recovered}</td>
                      <td>{val.deaths}</td>
                      <td>{val.lastupdatedtime}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          More
                        </button>
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default State;
