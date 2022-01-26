import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CardItems from "../components/cardItem/CardItem.js";
import AppContext from "../Context"


function Favorites() {
  const {favorite, addToFavorite} = React.useContext(AppContext);

  return (
    <div className="cardContainer d-flex">
    {favorite

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
