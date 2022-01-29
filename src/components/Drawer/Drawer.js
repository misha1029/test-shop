import React from "react";
import ReactDOM from "react-dom";
import Info from "../Info/Info.js";
import styles from "./Drawer.module.scss";
import axios from "axios";

import { useCart } from "../Hooks/useCart";

const deley = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCardItems, totalPrice } = useCart();

  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://61c6e2f49031850017547270.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCardItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        axios.delete(
          "https://61c6e2f49031850017547270.mockapi.io/cart/" + item.id
        );
        await deley(1000);
      }
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
                  <div key={obj.id} className={styles.cartItem}>
                    <div
                      style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className={styles.cartItemImg}
                    ></div>
                    <div className="flex">
                      <p className="">{obj.name}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className={styles.removeBtn}
                      src="./img/btn-remove.jpg"
                      alt="Remove"
                    />
                  </div>
                ))}
              </div>
              <div className={styles.cardTotalBlock}>
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб.</b>
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
