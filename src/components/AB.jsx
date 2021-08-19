import React from "react";

const AB = () => {
  var localCartId = JSON.parse(localStorage.getItem("cartUnitDataId"));
  var localCardData = JSON.parse(localStorage.getItem("cartUnitData5"));

  for (let i = 0; i < localCartId.length; i++) {
    // JSON.parse(localStorage.getItem(localCartId[i]))?.map((id) => {
    JSON.parse(localStorage.getItem(localCartId[i]))?.map((id) => {
      let item = localCardData[id];
      return (
        <div key={item.p_id} className="cart-inner-container">
          <div className="cart-item-img">
            <img src={item.img} alt="" />
          </div>
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>{item.about}</p>

            {/* <button onClick={() => decreaseItemQty(item)}>-</button> */}
            <span>{item.qty}</span>
            {/* <button onClick={() => increaseItemQty(item)}>+</button> */}
            <h3>
              (₹{item.unit_price}/{item.unit_name})
            </h3>

            <h3> Price: ₹{item.unit_total} </h3>
          </div>
          <div className="cart-item-delivery-details">
            {/* <p>Delivery by {todayDate}</p> */}
          </div>
        </div>
      );
    });
  }
  // </div>
  // )
};

export default AB;
