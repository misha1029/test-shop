import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./HeaderItems.module.scss";
import AppContext from "../../Context";
import { useCart } from "../Hooks/useCart";

function HeaderItem(props) {
  const { totalPrice } = useCart();

  return (
    <header className={styles.container}>
      <Link to="/">
        <div className={styles.headerContainer}>
          <img width={40} height={40} src="./img/img1.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Shop</h3>
            <p className="opacity-5">Магазин мониторов</p>
          </div>
        </div>
      </Link>
      <ul className={styles.basketContainer}>
        <img
          onClick={props.onClickCard}
          className={styles.basket}
          width={20}
          height={20}
          src="./img/basket.png"
          alt="basket"
        />
        <li className="mr-30">
          <span className="ml-10">{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-10"
              width={18}
              height={18}
              src="./img/favorite.jpg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              width={18}
              height={18}
              src="./img/Union.svg"
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default HeaderItem;
