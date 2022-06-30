import React from "react";
import ReactDOM from "react-dom";
import Info from "../Info/Info.js";
import styles from "./Drawer.module.scss";
import axios from "axios";


import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../../redux/cart/selectors";
import { removeItem } from "../../redux/cart/slise";
import { DrawerItem } from "../DriwerItem/DrawerItem.js";
import { clearItems } from "../../redux/cart/slise"

const deley = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, opened }) {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);


    const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://61c6e2f49031850017547270.mockapi.io/orders",
        {
          items,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      dispatch(clearItems());
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Корзина
          <img
            onClick={onClose}
            className={styles.removeBtn}
            src="./img/btn-remove.jpg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className={styles.drawerItemsContainer}>
            <div className={styles.drawerItems}>
              {items.map((obj) => (
                  <DrawerItem key = {obj.id} {...obj}/>
              ))}
            </div>
            <div className={styles.cardTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className={styles.greenButtom}>
                <b>Оформить заказ</b>
                <img src="./img/arrow1.png" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            onClose = {setIsOrderComplete}
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            discription={
              isOrderComplete
                ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrderComplete ? "img/orderCompled.jpg" : "img/bas.jpg"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
