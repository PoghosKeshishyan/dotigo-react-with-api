import { useState } from "react";
import './DomainList.css';

export default function DomainList({ currentDomains }) {
  const [cartStatus, setCartStatus] = useState({});

  const toggleCart = (id) => {
    setCartStatus((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="domain-list">
      {currentDomains.map((elem) => (
        <div key={elem.id} className="domain-item flex-between">
          <p className="domain-title">{elem.title}</p>

          <div className="buy flex-center">
            <div className="price-box">
              <span className="old-price">{elem.old_price}</span>
              <span className="price">{elem.price}</span>
            </div>

            <img
              src={
                cartStatus[elem.id]
                  ? "/images/partials/cart-checked.svg"
                  : "/images/partials/cart.svg"
              }
              alt={elem.title}
              onClick={() => toggleCart(elem.id)}
              className="btn"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
