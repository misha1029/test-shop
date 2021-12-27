import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Drawer.module.scss';


function Drawer({onClose, items = []}) {
    return (
      <div className = "overlay">
            <div className = "drawer">
            <h2 className = "d-flex justify-between mb-30 ">Корзина 
              <img onClick = {onClose} className = "removeBtn cu-p " src="./img/btn-remove.jpg" alt="Remove"/>
            </h2>

            <div className = "drawerItems">
              {items.map((obj) => (
                            <div className = "cartItem d-flex align-center">
                              <div style = {{backgroundImage:`url(${obj.imageUrl})`}} className = "cartItemImg" ></div>
                              <div className = "flex" >
                                <p className="">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                              </div>
                              <img className = "removeBtn" src="./img/btn-remove.jpg" alt="Remove"/>
                            </div> 
              ))}
            </div>

            <div className = "cardTotalBlock">
                <ul >
                <li >
                  <span>Итого:</span>
                  <div></div>
                  <b>23 555 руб.</b>
                </li>
                <li >
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className = "greenButtom">
                <b>Оформить заказ</b>
                <img src="./img/arrow1.png" alt="arrow" />
                
                
                
              </button>
            </div>

          
        </div>
    </div>    
    );
  }
  
  export default Drawer;







