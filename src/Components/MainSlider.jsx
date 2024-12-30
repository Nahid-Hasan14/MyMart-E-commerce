import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div className="carousel-bg-img1">
        <h3></h3>
      </div>
      <div className="carousel-bg-img2">
        <h3></h3>
      </div>
      <div className="carousel-bg-img3">
        <h3></h3>
      </div>
    </Slider>
    </div>
  );
}