import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CardItems from "../components/cardItem/CardItem.js";

function Home({ items, setSearchValue, searchValue, addToCard, setFavorite, addToFavorite}) {
  return (
    <div className="p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все товары"}
        </h1>
        <div className="search d-flex align-center">
          <div className="d-flex align-center">
            <img src="./img/search.jpg" alt="Search" />
          </div>
          {searchValue && (
            <img
              className="removeBtnApp cu-p "
              onClick={() => setSearchValue("")}
              src="./img/btn-remove.jpg"
              alt="Clear"
            />
          )}
          <input
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            className="inputSearch"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="cardContainer d-flex">
        {items

          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <CardItems
              key={index}
              onPlus={(obj) => addToCard(obj)}
              onFavorite={(obj) => addToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
