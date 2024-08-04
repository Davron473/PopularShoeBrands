import React from 'react';
import './BrandImage.css';

const BrandImage = ({ image, alt }) => {
  return (
    <div className="brand-image">
      <img src={process.env.PUBLIC_URL + '/' + image} alt={alt} />
    </div>
  );
};

export default BrandImage;
