import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CardItems from "../components/cardItem/CardItem.js";


function Favorites({FavoriteItems, addToFavorite}) {
  return (
    <div className="cardContainer d-flex">
    {FavoriteItems

      .map((item, index) => (
        <CardItems
          key={index}
          favorited ={true}
          onFavorite = {addToFavorite}
          {...item}
        />
      ))}
  </div>
  );
}

export default Favorites;
