import React from "react";
import ReactDOM from "react-dom";
import style from "./CardItem.module.scss";
import Loading from "../Loading/Loading";
import AppContext from "../../Context";

function CardItem({
  id,
  onFavorite,
  name,
  imageUrl,
  price,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, name, imageUrl, price }

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={style.card}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {onFavorite &&
            <div className={style.favorite}>
              <img
                onClick={onClickFavorite}
                src={isFavorite ? "./img/liked.jpg" : "./img/unliked.jpg"}
                alt="Unliked"
              />
            </div>
          }
          <img width={133} height={112} src={imageUrl} alt="Plus" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className=" infoCardd-flex flex-colum">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <button
                className={isItemAdded(id) ? style.buttonCheck : style.button}
                onClick={onClickPlus}
              >
                <img width={11} height={11} src="./img/plus.png" alt="Plus" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CardItem;
