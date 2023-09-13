import './carousel.css'
import Slider from 'react-slick'

function Carousel({ children }){
  
  const settings = {
    dots: false,
    infinity: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptativeHeight: true,
    slidesToShow: 3,
    slidesToScrow: 1
  }

  return(
    <div>
      <Slider {...settings}>
        { children }
      </Slider>
    </div>
  );
}

export default Carousel;