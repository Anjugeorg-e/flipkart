import React from "react";
import flipkartHeaderImg from "../Asset/img/flipkartheaderimage.png";
import cartImg from "../Asset/img/cart.svg";
import search from "../Asset/img/search.png";

import "./Header.css";
function DesktopHeader() {
  return (
    <div className="DesktopflpikartHeader">
      <div className="DesktopflipkartSubHead">
        <img className="DesktopexploreHead" src={flipkartHeaderImg} />
      </div>

      <div className="DesktopsearchContainer">
        <div className="DesktopsearchContainer">
          <img src={search} />
        </div>
        <div className="Desktopsearch-PlaceHolder">
          <input placeholder="Search for Products, Brands and More" />
        </div>
      </div>
      <div className="DesktopexploreWishlist">
        <span>Login</span>
      </div>
      <div className="HeaderOptions">
        <div className="becomeSeller">
          <span>Become a seller</span>
        </div>
        <div className="moreOptions">
          <span>more</span>
        </div>
        <div className="cart">
          <img src={cartImg} />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
