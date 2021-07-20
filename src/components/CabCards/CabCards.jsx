import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StarIcon from '@material-ui/icons/Star';
import "./CabCard.css";

function CabCards() {
    return (
        <div className="cabcard_container" data-aos="fade-left">
            <div className="cabcard_head">
                <span className="cabcard_small_title">Vegetable Cabs</span>
                <span className="cabcard_big_title">Browse Througth Our Best Cabs</span>
            </div>
            <div className="cabcard_card_container">
            <div className="cabcard_card_con">
                <div className="cabcard_card_img_part">
                    <div className="cabcard_card_img">
                        <img className="cabcard_card_img_data" src="https://images.unsplash.com/photo-1494908528889-fa8ed729bcd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2V0YWJsZXMlMjB2YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cab card" />
                    </div>
                    <div className="cabcard_card_buy">
                        <div className="cabcard_card_add">Book The Cab</div>
                        <div className="cabcard_card_add_icon"><LocalShippingIcon style={{color:"white"}}/></div>
                    </div>
                </div>

                <div className="cabcard_card_body_part">
                    <div className="cabcard_card_body_rating"><StarIcon style={{color:"gold"}}/></div>
                    <div className="cabcard_card_body_title">Vegitable van</div>
                </div>
            </div>

            <div className="cabcard_card_con">
                <div className="cabcard_card_img_part">
                    <div className="cabcard_card_img">
                        <img className="cabcard_card_img_data" src="https://images.unsplash.com/photo-1494908528889-fa8ed729bcd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2V0YWJsZXMlMjB2YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cab card" />
                    </div>
                    <div className="cabcard_card_buy">
                        <div className="cabcard_card_add">Book The Cab</div>
                        <div className="cabcard_card_add_icon"><LocalShippingIcon style={{color:"white"}}/></div>
                    </div>
                </div>

                <div className="cabcard_card_body_part">
                    <div className="cabcard_card_body_rating"><StarIcon style={{color:"gold"}}/></div>
                    <div className="cabcard_card_body_title">Vegitable van</div>
                </div>
            </div>

            <div className="cabcard_card_con">
                <div className="cabcard_card_img_part">
                    <div className="cabcard_card_img">
                        <img className="cabcard_card_img_data" src="https://images.unsplash.com/photo-1494908528889-fa8ed729bcd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2V0YWJsZXMlMjB2YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cab card" />
                    </div>
                    <div className="cabcard_card_buy">
                        <div className="cabcard_card_add">Book The Cab</div>
                        <div className="cabcard_card_add_icon"><LocalShippingIcon style={{color:"white"}}/></div>
                    </div>
                </div>

                <div className="cabcard_card_body_part">
                    <div className="cabcard_card_body_rating"><StarIcon style={{color:"gold"}}/></div>
                    <div className="cabcard_card_body_title">Vegitable van</div>
                </div>
            </div>

            <div className="cabcard_card_con">
                <div className="cabcard_card_img_part">
                    <div className="cabcard_card_img">
                        <img className="cabcard_card_img_data" src="https://images.unsplash.com/photo-1494908528889-fa8ed729bcd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2V0YWJsZXMlMjB2YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cab card" />
                    </div>
                    <div className="cabcard_card_buy">
                        <div className="cabcard_card_add">Book The Cab</div>
                        <div className="cabcard_card_add_icon"><LocalShippingIcon style={{color:"white"}}/></div>
                    </div>
                </div>

                <div className="cabcard_card_body_part">
                    <div className="cabcard_card_body_rating"><StarIcon style={{color:"gold"}}/></div>
                    <div className="cabcard_card_body_title">Vegitable van</div>
                </div>
            </div>

            <div className="cabcard_card_con">
                <div className="cabcard_card_img_part">
                    <div className="cabcard_card_img">
                        <img className="cabcard_card_img_data" src="https://images.unsplash.com/photo-1494908528889-fa8ed729bcd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHZlZ2V0YWJsZXMlMjB2YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cab card" />
                    </div>
                    <div className="cabcard_card_buy">
                        <div className="cabcard_card_add">Book The Cab</div>
                        <div className="cabcard_card_add_icon"><LocalShippingIcon style={{color:"white"}}/></div>
                    </div>
                </div>

                <div className="cabcard_card_body_part">
                    <div className="cabcard_card_body_rating"><StarIcon style={{color:"gold"}}/></div>
                    <div className="cabcard_card_body_title">Vegitable van</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CabCards
