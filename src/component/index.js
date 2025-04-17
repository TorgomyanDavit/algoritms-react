import React from 'react';
import ReactImageZoom from 'react-image-zoom';
import "../App.css"
const ZoomedImage = () => {
  return (
    <ReactImageZoom
      width={500}
      height={400}
      zoomWidth={600}
      img="https://crm-media-backend.innodream.com/api/Image/Resize/1/1660_548_ducray_arm(4)-638804152613288993.png"
      className="zoom-img"
    />
  );
};

export default ZoomedImage;
