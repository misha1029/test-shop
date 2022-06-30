import React from "react";
import AppContext from "../../Context";

import styles from "./Info.module.scss";

 
export const Info = ({ title, image, discription, onClose }) => {
  const { setCardOpened } = React.useContext(AppContext);


  const onCloseOrder = () => {
    setCardOpened(false)
    onClose(false)
  }

  return (
    <div className={styles.cartEmpty}>
      <img class="mb-10" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p class="opacity-6">{discription}</p>

      <button
        onClick={onCloseOrder}
        className={styles.greenButton}
      >
        <div className={styles.imgGreenButton}>
          <img src="./img/arrow1.png" alt="Arrow" />
        </div>
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
