import React, { useState } from "react";
import { Qty } from "../../Data/Qty";
import "./IteamBox.css";

function IteamBox() {
  const [selectedIteam, setSelectedIteam] = useState(1);
  var firstIteamPrice = Qty[Object.keys(Qty)[0]].Price;
    const [defaultIteam,setDefaultiteam] = useState(firstIteamPrice);
  
    const onChangeValue = (event) => {
    var val = event.target.value;
    setDefaultiteam(val)
  }
  console.log(defaultIteam);
  return (
    <div className="IteamBox_container">
      {Qty.map((data) => {
        return (
          <input
            type="radio"
            id={data.qty}
            name="qty"
            value={data.Price}
            key={data.id}
            disabled={data.qtyAva > 0 ? false : true}
            defaultChecked={data.id === 1 ? true : false}
            onChange={onChangeValue}
          />
        );
      })}
      <br />
      <div className="iteam_box_con">
        {Qty.map((data) => {
          return (
            <label htmlFor={data.qty} key={data.id} onClick={data.qtyAva > 0 ? () => setSelectedIteam(data.id) : () => setSelectedIteam(selectedIteam)}>
              <div className={`iteam_box ${data.qtyAva > 0 ? "general_iteam" : "sold_out_iteam"} ${data.id === selectedIteam ? "active_iteam" : "general_iteam"}`}>
                <div className={`iteam_box_contetn common_flex ${data.id === selectedIteam ? "active_iteam_box_qty" : "iteam_box_qty"} ${data.qtyAva > 0? "iteam_box_qty": "sold_out_iteam_box_qty"}`}>
                  {data.qty}
                </div>
                <div className="iteam_box_price">₹{data.Price}</div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default IteamBox;
