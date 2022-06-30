import React from "react";
import styles from "./DrawerItem.module.scss";


import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cart/slise";

export const DrawerItem = ({ id, name, price, imageUrl }) => {

  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to remave?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.cartItem}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.cartItemImg}
      ></div>
      <div className="flex">
        <p className="">{name}</p>
        <b>{price} руб.</b>
      </div>
      <img
        onClick={onClickRemove}
        className={styles.removeBtn}
        src="./img/btn-remove.jpg"
        alt="Remove"
      />
    </div>
  );
};
