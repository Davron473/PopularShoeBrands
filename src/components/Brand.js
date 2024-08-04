import React from 'react';
import './Brand.css';

const Brand = ({ name, description, image, shoes, website }) => {
  return (
    <div className="brand">
      <img src={process.env.PUBLIC_URL + '/' + image} alt={name} />
      <h2>{name} Most Popular Selling Shoes</h2>
      <div className="shoe-list">
        {shoes.map((shoe, index) => (
          <div key={index} className="shoe">
            <img src={process.env.PUBLIC_URL + '/' + shoe.image} alt={shoe.name} />
            <p>{shoe.name}</p>
            <p>{shoe.description}</p>
          </div>
        ))}
      </div>
      <div className="brand-website">
        <a href={website} target="_blank" rel="noopener noreferrer">Visit {name} official website</a>
      </div>
    </div>
  );
};

export default Brand;
