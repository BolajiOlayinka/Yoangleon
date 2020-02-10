import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src: 'images/hero.jpg',
    key: '1',
    caption: 'WELCOME TO YOANGLEON',
    button:'Start'
  },
  {
    src: 'images/hero.jpg',
    key: '2',
    caption: 'WE ARE KEEN ON DESIGNS, EXECUTION AND MANAGEMENT ',
    
  },
  {
    src: 'images/hero.jpg',
    key: '3',
    caption: 'KEEN GIVES THE BEST AT AN AFFORDABLE PRICE',
    
  },
  
];
const BannerCarousel = () => <UncontrolledCarousel items={items} />;


export default BannerCarousel;

