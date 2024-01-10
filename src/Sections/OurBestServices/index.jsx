import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/searchContext";

function OurBestServices() {
  const [services, setServices] = useState([]);
  const { handleSearch, search } = useContext(SearchContext);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }

  function Delete(id) {
    fetch("http://localhost:3100/" + id, { method: "Delete" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  return (
    <div className="ourBestServices">
      <div className="ourBestServicesCards">
        <div className="top">
          <div className="border"></div>
          <div className="text">OUR TOP SERVICES</div>
        </div>
        <div className="main">
          <h2 className="mainText">Our Best Services</h2>
          <input type="text" onChange={(e) => handleSearch(e)} />
        </div>
        <div className="cards">
          {services
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <ul className="card" key={x._id}>
                <li className={`${x.icons} icon`}></li>
                <li className="title">{x.title}</li>
                <li className="description">{x.description}</li>
                <button className="btn" onClick={() => Delete(x._id)}>Delete</button>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default OurBestServices;
