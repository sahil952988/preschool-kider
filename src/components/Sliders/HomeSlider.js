import React from 'react'
import "../../style/HomeSlider.css"
import Slider from 'react-slick'

const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,

  };
  return (
    <>
      <div className="header_top absolute h-[10px] xl:w-[1326px] w-full xl:ml-[105px] z-10 ">
      </div>

      <Slider {...settings} className='xl:mr-[105px] xl:ml-[105px]'>

        <div className="slider_01 w-fit xl:h-[742.33px] h-[300px]">
        </div>

        <div className="slider_02 w-fit xl:h-[742.33px] h-[300px]">
        </div>
      </Slider>

      <div className="header_bottom absolute h-[19px] xl:w-[1326px] w-full xl:ml-[105px] z-10 mt-[-23px] ">
      </div>
    </>
  )
}
export default HomeSlider