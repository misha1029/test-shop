import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import CardItems from "./components/cardItem/CardItem.js";
import HeaderItems from "./components/Header/HeaderItems.js";
import Drawer from "./components/Drawer/Drawer.js";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://61c6e2f49031850017547270.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json)
    })
  }, []);

  const addToCard = (obj) => {
    setCardItems((prev) => [...prev, obj])
  }

  const onChangesetSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  
  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items = {cartItems} onClose = {() => setCardOpened (false) } />}
      <HeaderItems onClickCard = {() => setCardOpened (true)} />
      <div className="p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>все товары</h1>
          <div className="search d-flex align-center">
            <div className="d-flex align-center">
              <img src="./img/search.jpg" alt="Search" />
            </div>
            {searchValue && <img className = "removeBtnApp cu-p " src="./img/btn-remove.jpg" alt="Close"/>}
            <input onChange={onChangesetSearchInput} value = {searchValue} className="inputSearch" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cardContainer d-flex">
          {items.map((item, index) => (
            <CardItems
              key = {index}
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus = {(obj) => addToCard(obj)}
              onFavorite = {() => console.log('Добавели в закладки')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
