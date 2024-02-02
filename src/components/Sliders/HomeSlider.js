import React from 'react'
import Slider from 'react-slick';
import "../../style/HomeSlider.css"



const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,

  };
  return (
    <>
      <div className='lg:ml-[105px] lg:mr-[105px]'>
        <div className="bgheader_top lg:w-[1320px] w-812px h-[10px] z-10 absolute ">

        </div>

        <Slider {...settings} className='lg:w-full w-[812px]'>
          <div className="slider-01 lg:h-[742.133px] h-[456.533px] ">
          </div>

          <div className="slider-02 lg:h-[742.133px] h-[456.533px] ">
          </div>
        </Slider>
        {/* <div className="bgheader_bottom lg:mr-[105px] ">
        </div> */}
      </div>
    </>
  )
}
export default HomeSlider