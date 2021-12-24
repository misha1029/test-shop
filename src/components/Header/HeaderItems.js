import React from 'react';
import ReactDOM from 'react-dom';
import styles from './HeaderItems.module.scss';


function HeaderItem(props) {
  console.log(props)
    return (
      <header className='d-flex justify-between align-center p-40'>
        <div className="d-flex align-center">
          <img width={40} height={40} src="./img/img1.png" alt="logo" />
          <div> 
            <h3 className="text-uppercase">React Shop</h3>
            <p className="opacity-5">Магазин мониторов</p>
          </div>
        </div>
        <ul className="d-flex align-center ">
        <img onClick = {props.onClickCard} className = {styles.basket} width={20} height={20} src="./img/basket.png" alt="basket" />
            <li className="mr-30">
            <span className="ml-10">1205 руб.</span> 
            </li>
            <li>
            <img width={18} height={18} src="./img/Union.svg" alt="Union"/>
            </li>
        </ul>
      </header>
    );
  }
  
  export default HeaderItem;







