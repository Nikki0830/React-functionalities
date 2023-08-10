import React, { useEffect, useState } from "react";
import "./Covid.css";
import { Col } from "react-bootstrap";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      //   console.log(res);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <p className="Live"> &#128721; LIVE</p>
        <h1 className="Covid">COVID-19 CORONAVIRUS TRACKER</h1>

        {/* <ul>
            <Col xs={12} xs={4} lg={4} xl={4} className="mb-4">
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
            </Col>
            <Col xs={12} sm={4} lg={3} xl={3} className="mb-4">
              <li className="card">
                <div className="card-main">
                  <div className="card-inner">
                    <p className="card-name">
                      <span>TOTAL</span> RECOVERED
                    </p>
                    <p className="card-total card-small">{data.recovered}</p>
                  </div>
                </div>
              </li>
            </Col>
            <Col xs={12} sm={4} lg={3} xl={3} className="mb-4">
              <li className="card">
                <div className="card-main">
                  <div className="card-inner">
                    <p className="card-name">
                      <span>TOTAL</span> CONFIRMED
                    </p>
                    <p className="card-total card-small">{data.confirmed}</p>
                  </div>
                </div>
              </li>
            </Col>
            <Col xs={12} sm={4} lg={3} xl={3} className="mb-4">
              <li className="card">
                <div className="card-main">
                  <div className="card-inner">
                    <p className="card-name">
                      <span>TOTAL</span> DEATH
                    </p>
                    <p className="card-total card-small">{data.deaths}</p>
                  </div>
                </div>
              </li>
            </Col>
            <Col xs={12} sm={4} lg={3} xl={3} className="mb-4">
              <li className="card">
                <div className="card-main">
                  <div className="card-inner">
                    <p className="card-name">
                      <span>TOTAL</span> ACTIVE
                    </p>
                    <p className="card-total card-small">{data.active}</p>
                  </div>
                </div>
              </li>
            </Col>
            <Col xs={12} sm={4} lg={3} xl={3} className="mb-4">
              <li className="card">
                <div className="card-main">
                  <div className="card-inner">
                    <p className="card-name">
                      <span>LAST</span> UPDATED
                    </p>
                    <p className="card-total card-small">
                      {data.lastupdatedtime}
                    </p>
                  </div>
                </div>
              </li>
            </Col>
          </ul> */}
        <div
          className="row"
          style={{
            width: "70%",
            marginLeft: "15%",
            marginTop:"3%"
          }}
        >
          <Col xs={12} sm={4} lg={3} xl={4} className="mb-4">
            <div
              className="card bg-info"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <div className="card-body text-center">
                <div className="d-inline text-white mb-2 our">OUR</div>
                <div className="d-inline text-white country">COUNTRY</div>
                <p className="card-text">INDIA</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} lg={3} xl={4} className="mb-4">
            <div
              className="card bg-success"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <div className="card-body text-center">
                <div className="d-inline text-white mb-2 our">TOTAL</div>
                <div className="d-inline text-white country">RECOVERED</div>
                <p className="card-text">{data.recovered}</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} lg={3} xl={4} className="mb-4">
            <div
              className="card bg-danger"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <div className="card-body text-center">
                <div className="d-inline text-white mb-2 our">TOTAL</div>
                <div className="d-inline text-white country">CONFIRMED</div>
                <p className="card-text">{data.confirmed}</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} lg={3} xl={4} className="mb-4">
            <div
              className="card bg-warning"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <div className="card-body text-center">
                <div className="d-inline text-white mb-2 our">TOTAL</div>
                <div className="d-inline text-white country">DEATH</div>
                <p className="card-text">{data.deaths}</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} lg={3} xl={4} className="mb-4">
            <div
              className="card bg-info"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <div className="card-body text-center">
                <div className="d-inline text-white mb-2 our">TOTAL</div>
                <div className="d-inline text-white country">ACTIVE</div>
                <p className="card-text">{data.active}</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} lg={3} xl={4} className="mb-4">
            <div
              className="card bg-warning"
              style={{ width: "100%", marginRight: "1rem" }}
            >
              <div className="card-body text-center">
                <div className="d-inline text-white mb-2 our">LAST</div>
                <div className="d-inline text-white country">UPDATED</div>
                <p className="card-text">{data.lastupdatedtime}</p>
              </div>
            </div>
          </Col>
       
        </div>
      </div>
    </>
  );
};

export default Covid;
