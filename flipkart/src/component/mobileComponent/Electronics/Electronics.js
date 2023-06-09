import React,{useState, useEffect} from "react";
import "./Electronics.css";

function Electronics() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.phones);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="PhonesSection">
        {data.map((card, index) => (
          <div className="phoneCards" key={index}>
            <img src={card} />
          </div>
        ))}
  </div>
  );
}

export default Electronics;
