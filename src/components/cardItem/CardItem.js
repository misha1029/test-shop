import React from "react";
import ReactDOM from "react-dom";
import style from "./CardItem.module.scss";
import Loading from "../Loading/Loading";


function CardItem({
  id,
  onFavorite,
  title,
  imageUrl,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={style.card}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={style.favorite}>
            <img
              onClick={onClickFavorite}
              src={isFavorite ? "./img/liked.jpg" : "./img/unliked.jpg"}
              alt="Unliked"
            />
          </div>
          <img width={133} height={112} src={imageUrl} alt="Plus" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className=" infoCardd-flex flex-colum">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <button
              className={isAdded ? style.buttonCheck : style.button}
              onClick={onClickPlus}
            >
              <img width={11} height={11} src="./img/plus.png" alt="Plus" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CardItem;
