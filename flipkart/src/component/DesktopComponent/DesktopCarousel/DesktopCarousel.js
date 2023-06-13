import React, { useEffect, useRef, useState } from "react";
import leftarrow from "../Asset/img/prevarrow.svg";
import "./DesktopCarousel.css";

function CarouselDesktop() {
  const [data, setData] = useState([]);
  let [index, setIndex] = useState(0);
  const image = useRef();

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
    const interval = setInterval(callIndex, 2000);
    return () => clearInterval(interval);
  }, [data.length]);

  const changeIndex = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  // const handleClickRight = () => {
  //   setIndex(index + 1);
  //   changeIndex();
  //   clearInterval();
  // };

  const handleClickRight= () => {
    setIndex((index) => (index === 0 ? data.length -1 : index- 1))
  }

  const handleClickLeft = () => {
    index = index - 1;
    changeIndex();
    clearInterval();
  };

  return (
    <div className="carouselDesktopContainer">
      <div className="carousalMainContainer">
        <div className="leftSlider" onClick={handleClickLeft}>
          <img src={leftarrow} />
        </div>

        {data.map((item) => {
          return (
            <div
              className="carousel-image"
              key={item}
              style={{
                transform: ` translateX(${-100 * index}%)`,
                transition: "transform ease-out 0.45s",
              }}
              ref={image}
            >
              <img src={item} />
            </div>
          );
        })}
        <div className="rightSlider" onClick={handleClickRight} >
          <img src={leftarrow} />
        </div>
      </div>
    </div>
  );
}

export default CarouselDesktop;
