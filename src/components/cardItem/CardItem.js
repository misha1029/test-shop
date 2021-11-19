import React from "react";
import ReactDOM from "react-dom";
import style from "./CardItem.module.scss";

function CardItem(props) {
  const onClickButton = () => {
    alert(props.title);
  };

  return (
    <div className={style.card}>
      <div className={style.favorite}>
        <img src="./img/unliked.jpg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Plus" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className=" infoCardd-flex flex-colum">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={style.button} onClick={props.onClick}>
          <img width={11} height={11} src="./img/plus.png" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default CardItem;
