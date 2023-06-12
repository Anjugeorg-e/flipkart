import React, { useEffect, useState } from "react";
import "./DesktopCarousel.css";

function CarouselDesktop() {
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
        setData(item.caroselElements);
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
    <div className="carouselDesktopContainer">
      {data.map((item) => {
        return (
          <div
            className="carusel-image" key={item}
            style={{
              transform: ` translateX(${-100 * index}%)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            <img src={item} />
          </div>
        );
      })}
    </div>
  );
}

export default CarouselDesktop;


