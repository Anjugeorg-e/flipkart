import React, { useEffect, useState, useRef } from "react";
import leftarrow from "../Asset/img/prevarrow.svg";
import "./DealsFashion.css";

function DealsFashion() {
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
        setData(item.dealsOnFashion);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClickRight = () => {
    imageCard.current.style.transform = `translatex(${-35}%)`;
    nextarrow.current.style.display = "none";
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
    <div className="dealsFashionMainContainer">
      <div className="fashion-subSection">
        <div className="FashionContainer">
          <h2>Top Deals on Fashion</h2>
          <a href="#">VIEW ALL</a>
        </div>
      </div>
      <div className="prev-Movement" ref={prevarrow} onClick={handleClickLeft}>
        <img src={leftarrow} />
      </div>
      <div className="dealsFashionContainer" ref={imageCard}>
        {data.map((card, index) => (
          <div className="dealFashionSubContainer" key={index} >
            <img src={card.image} />
            <div className="fashionDescription">
              <span className="fashionName">{card.title}</span>
              <span className="fashionOffers">{card.price}</span>
              <span className="fashionDetails">{card.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="next-Movement" ref={nextarrow} onClick={handleClickRight}>
        <img src={leftarrow} />
      </div>
    </div>
  );
}

export default DealsFashion;
