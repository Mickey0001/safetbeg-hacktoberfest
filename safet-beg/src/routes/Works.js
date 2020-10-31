import React from "react";
import store from '../store/store';
import Layouts from '../components/layouts/Layouts'

const Works = ({location: { pathname }, history}) => {

  const path = pathname.substr(7).toLowerCase();

  if (!store[path]) {
    history.push('/');
  }

  const { title, description, images, titleClass, imagesClass, imagesWrapper } = store[path];

  return <div className="page">
        <Layouts
            title={title}
            titleClass={titleClass}
            images={images}
            imagesClass={imagesClass}
            imagesWrapper={imagesWrapper}
            description={description}
            />
    </div>;
};

export default Works;
