import React from "react";
import "./OurBest.css";

function OurBest() {
  return (
    <div className="ourbest_container" data-aos="fade-left">
      <div className="ourbest_head">Our Best</div>
      

      <div className="ourbest_card_cont">
      
      <div className="ourbest_card ourbest_card_one" >
        <div className="ourbest_card_data">
            <div className="ourbest_heiglight">Deals</div>
            <div className="ourbest_no_heiglight">of the</div>
            <div className="ourbest_no_heiglight">Week</div>
          </div>
        </div>

        <div className="ourbest_card ourbest_card_two" >
        <div className="ourbest_card_data">
            <div className="ourbest_no_heiglight">Big Pack</div>
            <div className="ourbest_heiglight">Bigger</div>
            <div className="ourbest_heiglight">Discount</div>
          </div>
        </div>

        <div className="ourbest_card ourbest_card_three">
        <div className="ourbest_card_data">
            <div className="ourbest_heiglight">Combos</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBest;
