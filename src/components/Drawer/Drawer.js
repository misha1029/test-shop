import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Drawer.module.scss';


function Drawer() {
    return (
      <div  style={{display: 'none'}}  className = "overlay">
            <div className = "drawer">
            <h2 className = "d-flex justify-between mb-30 ">Корзина 
            <img className = "removeBtn cu-p " src="./img/btn-remove.jpg" alt="Remove"/></h2>

            <div className = "drawerItems">
              <div className = "cartItem d-flex align-center">
                <div style = {{backgroundImage:'url(./imgT/11.jpg)'}} className = "cartItemImg" ></div>
                <div className = "flex" >
                  <p className="">Монитор 23.8" Acer Nitro VG240YSbmiipx</p>
                  <b>12 999 руб.</b>
                </div>
                <img className = "removeBtn" src="./img/btn-remove.jpg" alt="Remove"/>
              </div>

              <div className = "cartItem d-flex align-center">
                <div style = {{backgroundImage:'url(./imgT/11.jpg)'}} className = "cartItemImg" ></div>
                <div className = "flex" >
                  <p className="">Монитор 23.8" Acer Nitro VG240YSbmiipx</p>
                  <b>12 999 руб.</b>
                </div>
                <img className = "removeBtn" src="./img/btn-remove.jpg" alt="Remove"/>
              </div>
              
              
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







