import React from "react";
import "./gallery.css";

const Gallery = ({ src, alt, imagesClass }) => {
  return (
    <img className={imagesClass} src={src} alt={alt} />
  );
};

export default Gallery;
