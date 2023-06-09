import React, { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(
            "https://raw.githubusercontent.com/Anjugeorg-e/flipkart/main/flipkart/public/data.json"
        )
        .then((response) => {
            return response.json();
        })
        .then ((item) => {
            setData(item.wishlist);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="WishlistContainer">
      <div className="WishlistSubContainer">
        <p>Add to your wishlist</p>
        <a href="#">View all</a>
      </div>
      <div className="wishlistCardsContainer">
      {data.map((card, index) => (
            <div className='dealsCards' key={index}>
                <img src={card.image} />
                <span>{card.title}</span>
                <p>{card.offer}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
