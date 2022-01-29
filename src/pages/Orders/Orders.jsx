import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CardItems from "../../components/cardItem/CardItem.js";
import axios from "axios";
import AppContext from "../../Context";
import styles from "./Orders.module.scss";

function Orders({ FavoriteItems, addToFavorite }) {
  const { addToCard } = React.useContext(AppContext);

  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://61c6e2f49031850017547270.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch {
        alert("Error orders");
      }
    })();
  }, []);

  return (
    <div className={styles.ordersContainer}>
      <h1>Заказы</h1>
      <div>
        <div className="cardContainer d-flex">
          {(isLoading ? [...Array(10)] : orders).map((item, index) => (
            <CardItems key={index} loading={isLoading} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
