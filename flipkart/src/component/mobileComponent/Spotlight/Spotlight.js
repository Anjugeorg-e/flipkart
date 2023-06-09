import React,{useState, useEffect} from "react";
import './Spotlight.css';

function Spotlight() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.spotLight);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="spotlightContainer">
      <div className="spotlightSubContainer">
        <h4>Spotlights on</h4>
        <a href="#">View all</a>
      </div>
      <div className="spotlightCardsContainer">
        {data.map((card, index) => (
          <div className="spotlightCards" key={index}>
            <img src={card.image} />
            <h4>{card.title}</h4>
            <p>{card.offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spotlight;
