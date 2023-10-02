import './carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { settings } from './carousel';

function Carousel({ children }){

  return(
    <div>
      <Slider {...settings}>
        { children }
      </Slider>
    </div>
  );
}

export default Carousel;