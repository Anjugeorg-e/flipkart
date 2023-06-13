import React, { useEffect, useRef, useState } from "react";
import "./DealsElectronics.css";
import leftarrow from "../Asset/img/prevarrow.svg";
function DealsElectronics() {
  const [data, setData] = useState([]);
  const imageCard = useRef();
  const prevarrow = useRef();
  const nextarrow = useRef();

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        setData(item.DealsOnElectronics);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickNext = () => {
    imageCard.current.style.transform = `translatex(${-35}%)`;
    nextarrow.current.style.display = "flex";
    prevarrow.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };
  const handleClickPrev = () => {
    imageCard.current.style.transform = `translatex(${2}%)`;
    nextarrow.current.style.display = "flex";
    prevarrow.current.style.display = "none";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="Electronics-Section">
      <div className="dealsOnElectronics">
        <div className="electext">
        <div className="electronicsDealsSection">
          <h2>Top Deals on Electronics</h2>
          <a href="#">VIEW ALL</a>
        </div>
        </div>

        <div className="left-Movement" ref={prevarrow} onClick={handleClickPrev}>
          <img src={leftarrow}  />
        </div>
        <div className="electronicsContainer" ref={imageCard}>
          {data.map((card, index) => (
            <div className="electronicsSubSection">
              <img src={card.image} />
              <div className="electronicsDetails">
                <span className="electronicsName">{card.title}</span>
                <span className="electronicsPrice">{card.price}</span>
                <span className="electronicsDescription">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="right-Movement" ref={nextarrow} onClick={handleClickNext}>
          <img src={leftarrow}  />
        </div>
      </div>
    </div>
  );
}

export default DealsElectronics;
