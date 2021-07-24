import React from 'react';
import "./LargeImage.css";

function LargeImage({img}) {
    return (
        <div className="LargeImage_container">
            <div className="largeimage-data">
                <img className="largeimage_image" src={img} alt="large_image" />
            </div>
            
        </div>
    )
}

export default LargeImage
