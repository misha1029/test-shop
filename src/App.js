import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import HeaderItems from "./components/Header/HeaderItems.js";
import Drawer from "./components/Drawer/Drawer.js";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites/Favorites";
import AppContext from "./Context";
import Orders from "./pages/Orders/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCardItems] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cardOpened, setCardOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://61c6e2f49031850017547270.mockapi.io/cart"),
            axios.get("https://61c6e2f49031850017547270.mockapi.io/favorites"),
            axios.get("https://61c6e2f49031850017547270.mockapi.io/items"),
          ]);

        setIsLoading(false);

        setCardItems(cartResponse.data);
        setFavorite(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch {
        alert("Ощибка при запрасе данных");
      }
    }
    fetchData();
  }, []);

  const addToCard = async (obj) => {
    try {
      const finenItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (finenItem) {
        setCardItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(`https://61c6e2f49031850017547270.mockapi.io/cart/${finenItem.id}`);
      } else {
        setCardItems((prev) => [...prev, obj]);
        const {data} = await axios.post(
          "https://61c6e2f49031850017547270.mockapi.io/cart",
          obj
        );
        setCardItems((prev) => prev.map((item) => {
          if(item.parentId === data.parentId){
            return {
              ...item,
              id: data.id,
            }
          }
          return item;
        }));
        
      }
    } catch {
      alert("Ощибка при добавлений в корзину");
    }
  };

  const addToFavorite = async (obj) => {
    try {
      if (favorite.find((FavObj) => FavObj.id === obj.id)) {
        axios.delete(
          `https://61c6e2f49031850017547270.mockapi.io/favorites/${obj.id}`
        );
        setFavorite((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
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

  const onRemaveCart = async (id) => {
    try {
      setCardItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      await axios.delete(
        `https://61c6e2f49031850017547270.mockapi.io/cart/${id}`
      );
    } catch {
      alert("Ощибка при удалении из корзины");
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorite,
        isItemAdded,
        addToFavorite,
        setCardOpened,
        setCardItems,
        addToCard,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCardOpened(false)}
          onRemove={onRemaveCart}
          opened={cardOpened}
        />

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
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route exact path="/favorites" element={<Favorites />}></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
