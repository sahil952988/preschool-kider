import React from 'react'
import Slider from 'react-slick';
import "../../style/HomeSlider.css"
import bgheader_top from "../../Assets/bg-header-top.png"

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="bgheader_top mr-[105px] ">
      </div>

      <Slider {...settings} className='mr-[1.5px] ml-[105px] w-[86.4%]'>
        <div className="slider-01 h-[742.133px] ">
        </div>

        <div className="slider-02 h-[742.133px] ">
        </div>
      </Slider>
      <div className="bgheader_bottom mr-[105px] ">
      </div>
    </>
  )
}
export default HomeSlider