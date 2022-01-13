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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get("https://61c6e2f49031850017547270.mockapi.io/cart")
      const favoritesResponse = await axios.get("https://61c6e2f49031850017547270.mockapi.io/favorites")
      const itemsResponse = await  axios.get("https://61c6e2f49031850017547270.mockapi.io/items")

      setIsLoading(false)

        setCardItems(cartResponse.data);
        setFavorite(favoritesResponse.data);
        setItems(itemsResponse.data);
    }
    fetchData()
  }, []);

  const addToCard = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://61c6e2f49031850017547270.mockapi.io/cart`
        );
        setCardItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://61c6e2f49031850017547270.mockapi.io/cart", obj);
        setCardItems((prev) => [...prev, obj]);
      }
    } catch {}
  };

  const addToFavorite = async (obj) => {
    try {
      if (favorite.find((FavObj) => FavObj.id === obj.id)) {
        axios.delete(
          `https://61c6e2f49031850017547270.mockapi.io/favorites/${obj.id}`
        );
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://61c6e2f49031850017547270.mockapi.io/favorites",
          obj
        );
        setFavorite((prev) => [...prev, data]);
      }
    } catch {
      alert("Error");
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
              cartItems={cartItems}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              addToCard={addToCard}
              setFavorite={setFavorite}
              addToFavorite={addToFavorite}
              isLoading= {isLoading}

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
