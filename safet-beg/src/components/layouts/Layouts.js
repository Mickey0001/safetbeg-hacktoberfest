import React from "react";
import "./layouts.css";
import Gallery from '../gallery/Gallery';

const Layouts = ({ title, titleClass, images, imagesWrapper, imagesClass, description }) => {
  return (
    <div>
      <h1 className={titleClass}>{title}</h1>

      <div className={imagesWrapper}>
      { images.map(({ src, alt }, key) => (
          <Gallery imagesClass={imagesClass} src={src} alt={alt} key={key} />
      ))}
      </div>

       <p>{description}</p>
    </div>
  );
};

export default Layouts;
