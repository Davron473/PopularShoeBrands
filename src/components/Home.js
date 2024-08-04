import React from 'react';
import './Home.css';

const Home = () => {
  const brands = [
    { name: 'Nike', image: 'nike.jpg' },
    { name: 'adidas', image: 'adidas.jpg' },
    { name: 'Jordan', image: 'jordan.jpg' },
    { name: 'Crocs', image: 'crocs.jpg' },
    { name: 'Puma', image: 'puma.jpg' },
  ];

  return (
    <div className="home">
      <h1>Welcome to the Shoe Brands Website</h1>
      <div className="brand-logos">
        {brands.map((brand, index) => (
          <div key={index} className="brand-logo">
            <img src={process.env.PUBLIC_URL + '/' + brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
      <div className="welcome-text">
      <p>
          Welcome to my website, where you would browse the most popular shoe brands and the three most bought shoes with that specific brand. 
          Feel free to visit the official websites and I do hope you enjoy!
        </p>
      </div>
      <div className="shoes">
        <img src={process.env.PUBLIC_URL + '/shoes.jpg'} alt="Download" />
      </div>
    </div>
  );
};

export default Home;