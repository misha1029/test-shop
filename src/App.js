import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import HeaderItems from "./components/Header/HeaderItems.js";
import Drawer from "./components/Drawer/Drawer.js";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://61c6e2f49031850017547270.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://61c6e2f49031850017547270.mockapi.io/cart")
      .then((res) => {
        setCardItems(res.data);
      });
    axios
      .get("https://61c6e2f49031850017547270.mockapi.io/favorites")
      .then((res) => {
        setFavorite(res.data);
      });
  }, []);

  const addToCard = (obj) => {
    axios.post("https://61c6e2f49031850017547270.mockapi.io/cart", obj);
    setCardItems((prev) => [...prev, obj]);
  };
  const addToFavorite = async (obj) => {
    try {
      if (favorite.find ((FavObj) => FavObj.id === obj.id)){
        axios.delete(`https://61c6e2f49031850017547270.mockapi.io/favorites/${obj.id}`);
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      }else{
        const {data} = await axios.post("https://61c6e2f49031850017547270.mockapi.io/favorites", obj);
        setFavorite((prev) => [...prev, data]);
      }
    } catch {
      alert('Error')
    }
  };

  const onRemaveCart = (id) => {
    axios.delete(`https://61c6e2f49031850017547270.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCardOpened(false)}
          onRemove={onRemaveCart}
        />
      )}
      <HeaderItems onClickCard={() => setCardOpened(true)} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              addToCard={addToCard}
              setFavorite={setFavorite}
              addToFavorite={addToFavorite}
            />
          }
        ></Route>
        <Route
          exact
          path="/favorites"
          element={
            <Favorites FavoriteItems={favorite} addToFavorite={addToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
