import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './SlideShow.module.css';

const SlideShow = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,       
      autoplaySpeed: 5000, 
    };
  return (
    <div className="slider-container">
    <Slider className={classes.SlideShow} {...settings}>
    {images.map((image, index) => (
      <div key={index} className="slick-slide">
        <img src={image} alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </Slider>
  </div>
  )
}

export default SlideShow