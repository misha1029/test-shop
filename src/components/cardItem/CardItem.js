import React from "react";
import style from "./CardItem.module.scss";
import Loading from "../Loading/Loading";

import { useSelector, useDispatch } from "react-redux";
import { addItem} from '../../redux/cart/slise'
import { selectCartItemById } from "../../redux/cart/selectors";
import {removeItem} from "../../redux/cart/slise";
import { addFavorite, removeFavorite } from "../../redux/favorited/slice";
import { selectFavoriteItemById } from "../../redux/favorited/selectors";
import {selectItems} from '../../redux/items/selectors'

function CardItem({
  id,
  name,
  imageUrl,
  price,
  favorited = false,
  loading = false,
}) {
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const { items, status } = useSelector(selectItems);
  const favoriteItem = useSelector(selectFavoriteItemById(id));


  const onClickAdd = () => {
    const item= {
      id,
      name,
      price,
      imageUrl,
      count: 0,
    };
    if(addedCount){
      dispatch(removeItem(id));
    }else{
      dispatch(addItem(item));
    }
  };

  const onClickAddFavorite = () => {
    const item= {
      id,
      name,
      price,
      imageUrl,
    };
    if(favoriteItem){
      dispatch(removeFavorite(id));
    }else{
      dispatch(addFavorite(item));
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <div className={style.card}>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <>
          {setIsFavorite &&
            <div className={style.favorite}>
              <img
                onClick={onClickAddFavorite}
                src={favoriteItem ? "./img/liked.jpg" : "./img/unliked.jpg"}
                alt="Unliked"
              />
            </div>
          }
          <img width={133} height={112} src={imageUrl} alt="Plus" />
          <h5>{name}</h5>
          <div className= {style.infoContainerCard}>
            <div className={style.infoContainer}>
              <span>Цена: </span>
              <b>{price} грн.</b>
            </div>
            
              <button
                className={addedCount ? style.buttonCheck : style.button}
                onClick={onClickAdd}
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
