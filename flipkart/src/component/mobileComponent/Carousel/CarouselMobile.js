import React, { useEffect, useState } from "react";
import "./CarouselMobile.css";

function CarouselMobile() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.flipkartProducts);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const length = data?.length;
  console.log(length);

  const callIndex = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    setTimeout(callIndex, 2000);
  });

  return (
    <div className="carouselContainer">
      {data.map((item) => {
        return (
          <div
            className="carusel-img" key={item}
            style={{
              transform: ` translateX(${-100 * index}%)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}

export default CarouselMobile;


