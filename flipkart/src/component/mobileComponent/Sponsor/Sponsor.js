import React, { useEffect, useState } from "react";
import "./Sponsor.css";

function Sponsor() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.sponsored);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
   <div className="sponsorContainer">
        <div className="sponsorSubContainer">
            <h4>Sponsored</h4>
        </div>
        <div className="sponsoredCardsContainer">
        {data.map((card, index) => (
            <div className='sponsoredCards' key={index}>
                <img src={card.image} />
            </div>
        ))}
        </div>
  </div>
  );
}

export default Sponsor;
