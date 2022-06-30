import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CardItems from "../../components/cardItem/CardItem.js";
import AppContext from "../../Context";
import styles from "./Home.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setItems, fetchItems } from "../../redux/items/slice";
import {selectItems} from '../../redux/items/selectors'

function Home({
  searchValue,
}) {

  const dispatch = useDispatch();
  const { items, status } = useSelector(selectItems);

  console.log(status, 'STAATUS')

  const getItems = async () => {
    dispatch(fetchItems());

  };

  React.useEffect(() => {
    getItems();
  }, []);


  const { setSearchValue} = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (status === 'loading' ? [...Array(10)] : filteredItems).map((item, index) => (
      <CardItems
        key={index}
        {...item}
      />
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все товары"}
        </h1>
        <div className={styles.search}>
          <div className={styles.imgContainer}>
            <img src="./img/search.jpg" alt="Search" />
          </div>
          {searchValue && (
            <img
              className={styles.removeBtnApp}
              onClick={() => setSearchValue("")}
              src="./img/btn-remove.jpg"
              alt="Clear"
            />
          )}
          <input
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            className={styles.inputSearch}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="cardContainer d-flex">{renderItems()}</div>
    </div>
  );
}

export default Home;
