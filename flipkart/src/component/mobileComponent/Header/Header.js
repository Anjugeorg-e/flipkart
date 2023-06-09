import React from "react";
import hamburger from "../Asset/img/hamburger.svg";
import flipkartHeaderImg from "../Asset/img/flipkartheaderimage.png";
import addItem from "../Asset/img/add.svg";
import cartImg from "../Asset/img/cart.svg";
import search from "../Asset/img/search.png";

import "./Header.css";
function Header() {
  return (
    <div className="flpikartHeader">
      <div className="flipkartSubHead">
        <img  src={hamburger} />
        <img className="exploreHead" src={flipkartHeaderImg} />
        <img src={addItem} />
        <img src={cartImg} />
        <span>Login</span>
      </div>
      <div className="searchProductsHead">
        <div className="searchContainer">
        <img src={search} />
        </div>
        <div className="search-PlaceHolder">
        <input placeholder="Search for Products, Brands and More" />
        </div>
      </div>
    </div>
  );
}

export default Header;
