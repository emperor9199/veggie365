import React, { useState } from "react";
import { useEffect } from "react";
import "./IteamBox.css";

function IteamBox({ prices,total_quantity,setCutmrp,setOurPrice,setYousave,setUnit,setCutmrpD }) {

  let priceUnitId;
  let firstPrice,price_unit_name,discount;
  
  const [defaultIteam, setDefaultiteam] = useState();
  const [selectedIteam, setSelectedIteam] = useState();
  const [selectedUnit, setSelectedUnit] = useState();
  
  prices.slice(0, 1).map((priceid) => {
    priceUnitId = priceid.price_unit_id;
    firstPrice = priceid.product_price;
    price_unit_name = priceid.price_unit_name;
    discount= priceid.discount === 0 ? 10 : priceid.discount;
  });

  useEffect(() => {
    setSelectedIteam(priceUnitId);
    setDefaultiteam(firstPrice);
    setSelectedUnit(price_unit_name);
    setCutmrpD(firstPrice+discount);
  },[priceUnitId,firstPrice,price_unit_name])

  console.log(selectedUnit);
  console.log("selectedIteam",selectedIteam);
  console.log("defaultIteam",defaultIteam);
  
  var firstIteamPrice = firstPrice;
  
  setUnit(selectedUnit);
  setCutmrp(defaultIteam);

  // console.log("selectedIteam",selectedIteam);
  // console.log("defaultIteam",defaultIteam);
  

  const onChangeValue = (event) => {
    var val = event.target.value;
    setDefaultiteam(val);
   
    prices.filter(ut => ut.product_price === Number(val)).map((pro) => {
      setSelectedUnit(pro.price_unit_name)
      let newDis = pro.discount === 0 ? 10 : pro.discount;
      setCutmrpD(pro.product_price+newDis);
      //console.log("pro",pro);
    })
  };
  return (
    <div className="IteamBox_container">
      {prices.map((radios) => {
        return (
          <input
            type="radio"
            id={radios.price_unit_name}
            name="price"
            value={radios.product_price}
            onChange={onChangeValue}
            defaultChecked={radios.price_unit_id === priceUnitId ? true : false}
            disabled={total_quantity > radios.unit_in_gm ? false : true}
          />
        );
      })}
      <br />
      <div className="iteam_box_con">
      {prices.map((radios) => {
        return (
          <label htmlFor={radios.price_unit_name} onClick={total_quantity > radios.unit_in_gm ? () => setSelectedIteam(radios.price_unit_id) : () => setSelectedIteam(selectedIteam)}>
            <div className={`iteam_box ${total_quantity > radios.unit_in_gm ? "general_iteam" : "sold_out_iteam"} ${radios.price_unit_id === selectedIteam ? "active_iteam" : "general_iteam"}`}>
              <div className={`iteam_box_contetn common_flex ${radios.price_unit_id === selectedIteam ? "active_iteam_box_qty" : "iteam_box_qty"} ${total_quantity > radios.unit_in_gm ? "iteam_box_qty": "sold_out_iteam_box_qty"}`}>
                {radios.price_unit_name}
              </div>
              <div className="iteam_box_price">₹{radios.product_price}</div>
            </div>
          </label>
        );
      })}
      </div>
    </div>
  );
}

export default IteamBox;
