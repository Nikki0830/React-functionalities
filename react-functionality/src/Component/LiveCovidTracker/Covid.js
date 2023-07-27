import React, { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      //   console.log(res);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getCovidData();
  }, []);
  return (
    <>
      <section>
        <h1> &#128721; LIVE</h1>
        <h1>COVID-19 CORONAVIRUS TRACKER</h1>
        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>OUR</span> COUNTRY
                </p>
                <p className="card-total card-small">INDIA</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
