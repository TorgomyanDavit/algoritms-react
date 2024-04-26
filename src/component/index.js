import React from 'react';
import ReactImageZoom from 'react-image-zoom';
import "../App.css"
const ZoomedImage = () => {
  return (
    <ReactImageZoom
      width={500}
      height={400}
      zoomWidth={600}
      img="https://natalimediaapi.innodream.com/api/Image/Resize/ProductImage/02058-637011347564623046.png"
      className="zoom-img"
    />
  );
};

export default ZoomedImage;
