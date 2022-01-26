import React from "react";
import AppContext from "../../Context";
import styles from "./Info.module.scss"

export const Info = ({title,image, discription}) => {
  const {setCardOpened} = React.useContext(AppContext)
  return (
    <div className={styles.cartEmpty}>
      <img
        class="mb-10"
        width="120px"

        src= {image}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p class="opacity-6">
        {discription}
      </p>
      <button onClick={() => setCardOpened(false)} className={styles.greenButton}>
        <img src="./img/arrow1.png" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
