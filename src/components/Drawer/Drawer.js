import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Drawer.module.scss';




function Drawer({onClose,onRemove, items = []}) {
    return (
      <div className = "overlay">
            <div className = "drawer">
            <h2 className = "d-flex justify-between mb-30 ">Корзина 
              <img onClick = {onClose} className = "removeBtn cu-p " src="./img/btn-remove.jpg" alt="Remove"/>
            </h2>

            {items.length > 0 ? 
            <div>
            <div className = "drawerItems">
              {items.map((obj) => (
                            <div key = {obj.id} className = "cartItem d-flex align-center">
                              <div style = {{backgroundImage:`url(${obj.imageUrl})`}} className = "cartItemImg" ></div>
                              <div className = "flex" >
                                <p className="">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                              </div>
                              <img onClick={() => onRemove(obj.id )} className = "removeBtn" src="./img/btn-remove.jpg" alt="Remove"/>
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
          </div> :
          
          <div className = {styles.cartEmpty}>
            <img class="mb-10" width="120px" height="120px" src="img/bas.jpg" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className = {styles.greenButton}>
              <img src="./img/arrow1.png" alt="Arrow" />
              Вернуться назад
            </button>
        </div>
          }
            

            
            

          
        </div>
    </div>    
    );
  }
  
  export default Drawer;







