import React from 'react';
import LargeImage from '../LargeImage/LargeImage';
import "./SmallImage.css";

function SmallImage({setImg,images}) {
    console.log("images",images);
    return (
        <div className="SmallImage_container">
            <div className="SmallImage_cont">
                {
                    images.map((img) => {
                        return(
                            <div className="smallimage_data" onClick={() => setImg(img.product_image_path)} key={img.product_image_id}>
                                <img className="smallimage_data_img" src={img.product_image_path} alt={img.product_image_id} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default SmallImage
