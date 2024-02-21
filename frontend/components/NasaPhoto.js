import React from "react";
const NasaPhoto = (photoData) => {
    //extract relevant data from the photoData prop
    const { url } = photoData;
    return (
        <div className="nasa-photo">
            <img src={url} />
        </div>
    )
}
export default NasaPhoto;