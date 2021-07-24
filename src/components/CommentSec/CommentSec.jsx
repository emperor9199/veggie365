import React from 'react';
import "./CommentSec.css";

function CommentSec() {
    return (
        <div className="CommentSec_container">
            <div className="CommentSec_cont">
                <div className="aboutproduct_title">
                    Comments
                    <div className="soloproduct_line" />
                </div>
                <div className="comments_sec_comment_container">
                    <div className="comments_sec_comment">
                        <div className="comment_sec_comment_img">
                            <img className="comment_sec_comment_img_data" src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="comments_user" />
                        </div>
                        <div className="comments_sec_comment_data">
                            <div className="comments_sec_user_name">Vishw Kadu</div>
                            <div className="comments_sec_user_date">July 25, 2019</div>
                            <div className="comments_sec_user_comment">Very Fresh Products!</div>
                        </div>
                    </div>
                    <hr/>

                    <div className="comments_sec_comment">
                        <div className="comment_sec_comment_img">
                            <img className="comment_sec_comment_img_data" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="comments_user" />
                        </div>
                        <div className="comments_sec_comment_data">
                            <div className="comments_sec_user_name">Parth Maru</div>
                            <div className="comments_sec_user_date">July 25, 2019</div>
                            <div className="comments_sec_user_comment">Loving It</div>
                        </div>
                    </div>
                    <hr/>

                    <div className="comments_sec_comment">
                        <div className="comment_sec_comment_img">
                            <img className="comment_sec_comment_img_data" src="https://images.unsplash.com/photo-1488371934083-edb7857977df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="comments_user" />
                        </div>
                        <div className="comments_sec_comment_data">
                            <div className="comments_sec_user_name">Tirth Joshi</div>
                            <div className="comments_sec_user_date">July 25, 2019</div>
                            <div className="comments_sec_user_comment">Your Products are amazing</div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default CommentSec
