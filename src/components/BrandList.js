import React from 'react';
import Brand from './Brand';

const brands = {
  Nike: {
    name: 'Nike',
    description: 'Just Do It.',
    image: 'nike.jpg',
    website: 'https://www.nike.com/',
    shoes: [
      { name: 'Air Max', description: 'Comfortable and stylish.', image: 'airmax.jpg' },
      { name: 'Cortez', description: 'Classic running shoe.', image: 'cortez.jpg' },
      { name: 'Blazer', description: 'Versatile and timeless.', image: 'blazer.jpg' }
    ]
  },
  adidas: {
    name: 'adidas',
    description: 'Impossible is Nothing.',
    image: 'adidas.jpg',
    website: 'https://www.adidas.com/us',
    shoes: [
      { name: 'Ultraboost', description: 'High performance running shoe.', image: 'ultraboost.jpg' },
      { name: 'Superstar', description: 'Iconic streetwear shoe.', image: 'superstar.jpg' },
      { name: 'Stan Smith', description: 'Minimalistic and stylish.', image: 'stansmith.jpg' }
    ]
  },
  Jordan: {
    name: 'Jordan',
    description: 'Air Jordan.',
    image: 'jordan.jpg',
    website: 'https://www.nike.com/jordan',
    shoes: [
      { name: 'Air Jordan 1', description: 'The original basketball shoe.', image: 'airjordan1.jpg' },
      { name: 'Air Jordan 3', description: 'Known for its elephant print.', image: 'airjordan3.jpg' },
      { name: 'Air Jordan 11', description: 'Famous for patent leather.', image: 'airjordan11.jpg' }
    ]
  },
  Crocs: {
    name: 'Crocs',
    description: 'Feel the Love.',
    image: 'crocs.jpg',
    website: 'https://www.crocs.com/',
    shoes: [
      { name: 'Classic Clog', description: 'Comfortable and iconic.', image: 'classicclog.jpg' },
      { name: 'LiteRide Clog', description: 'Foam cushioning.', image: 'literideclog.jpg' },
      { name: 'Baya Clog', description: 'Enhanced ventilation.', image: 'bayaclog.jpg' }
    ]
  },
  Puma: {
    name: 'Puma',
    description: 'Forever Faster.',
    image: 'puma.jpg',
    website: 'https://us.puma.com/us/en',
    shoes: [
      { name: 'Suede Classic', description: 'Timeless and versatile.', image: 'suedeclassic.jpg' },
      { name: 'RS-X', description: 'Retro-inspired design.', image: 'rsx.jpg' },
      { name: 'Cali', description: 'Inspired by the California lifestyle.', image: 'cali.jpg' }
    ]
  }
};

const BrandList = ({ brand }) => {
  const brandInfo = brands[brand];
  return (
    <div className="brand-list">
      {brandInfo ? (
        <Brand {...brandInfo} />
      ) : (
        Object.values(brands).map((brand, index) => (
          <Brand key={index} {...brand} />
        ))
      )}
    </div>
  );
};

export default BrandList;
