import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import CardItems from "./components/cardItem/CardItem.js";
import HeaderItems from "./components/Header/HeaderItems.js";
import Drawer from "./components/Drawer/Drawer.js";

const arr = [
  {
    name: 'Монитор 24.5" Acer Nitro XV253QX',
    price: 12999,
    imageUrl: "/imgT/11.jpg",
  },
  {
    name: 'Монитор 23.8" Acer Nitro VG240YSbmiipx',
    price: 20000,
    imageUrl: "/imgT/22.jpg",
  },
  {
    name: 'Монитор 27" Acer Nitro VG271UPbmiipx',
    price: 17000,
    imageUrl: "/imgT/33.jpg",
  },
  {
    name: 'Монитор 27" Acer Nitro VG271UPbmiipx',
    price: 17000,
    imageUrl: "/imgT/33.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <HeaderItems />
      <div className="p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>все товары</h1>
          <div className="search d-flex align-center">
            <div className="d-flex align-center">
              <img src="./img/search.jpg" alt="Search" />
            </div>
            <input className="inputSearch" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cardContainer d-flex">
          {arr.map((obj) => (
            <CardItems
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick = {() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
