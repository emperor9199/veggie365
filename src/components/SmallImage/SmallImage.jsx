import React from 'react';
import { images } from "../../Data/Images";
import LargeImage from '../LargeImage/LargeImage';
import "./SmallImage.css";

function SmallImage({setImg}) {
    return (
        <div className="SmallImage_container">
            <div className="SmallImage_cont">
                {
                    images.map((img) => {
                        return(
                            <div className="smallimage_data" onClick={() => setImg(img.url)} key={img.id}>
                                <img className="smallimage_data_img" src={img.url} alt={img.url} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default SmallImage
