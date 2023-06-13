import React, { useEffect, useState, useRef } from "react";

import "./FeaturedBrands.css";
import leftarrow from "../Asset/img/prevarrow.svg";

function FeaturedBrands() {
  const [data, setData] = useState([]);

  const imageCard = useRef();
  const nextarrow = useRef();
  const prevarrow = useRef();

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.featuredBrands);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickRight = () => {
    imageCard.current.style.transform = `translatex(${-35}%)`;
    nextarrow.current.style.display = "flex";
    prevarrow.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };
  const handleClickLeft = () => {
    imageCard.current.style.transform = `translatex(${2}%)`;
    prevarrow.current.style.display = "none";
    nextarrow.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="featureBrandMainContainer">
      <div className="featuredBrands">
        <div className="left-Slider" ref={prevarrow} onClick={handleClickLeft}>
          <img src={leftarrow} />
        </div>
        <div className="brandsFeatures" ref={imageCard}>
          {data.map((card, index) => (
            <div className="brandsContainer" key={index}>
              <img src={card} />
            </div>
          ))}
        </div>
        <div className="right-Slider" ref={nextarrow} onClick={handleClickRight}>
          <img src={leftarrow}  />
        </div>
      </div>
    </div>
  );
}

export default FeaturedBrands;
