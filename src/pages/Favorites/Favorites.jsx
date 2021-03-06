import React from "react";
import { Link } from "react-router-dom";
import CardItems from "../../components/cardItem/CardItem.js";
import styles from "./Favorites.module.scss";

import { useSelector } from "react-redux";
import {selectFavorite} from '../../redux/favorited/selectors'


function Favorites() {

const { items } = useSelector(selectFavorite);

  return (
    <div className={`${styles.container} ${items.length > 0 ? '' : styles.containerOwer}`}>
      {items.length > 0 ? (
        <div className={styles.favoritContainer}>
          <h1>Избранное</h1>
          <div className="cardContainer d-flex">
            {items.map((item, index) => (
              <CardItems
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.infoFavorites}>
          <img
            class="mb-10"
            width="90px"
            src="img/NoBookmarks.png"
            alt="Empty"
          />
          <h2>Закладок нет :(</h2>
          <p class="opacity-6">Вы ничего не добавляли в закладки</p>
          <Link to="/">
            <button className={styles.greenButton}>
              <div className={styles.imgGreenButton}>
                <img src="./img/arrow1.png" alt="Arrow" />
              </div>
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;
