import React from 'react'
import "../../style/HomeSlider.css"
import Slider from 'react-slick'

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
    arrows: false,

  };
  return (
    <>
      <div className="header_top absolute h-[10px] xl:w-[1326px] w-full xl:ml-[105px] z-10 ">
      </div>

      <Slider {...settings} className='xl:mr-[105px] xl:ml-[105px]'>

        <div className="slider_01 w-fit xl:h-[742.33px] h-[500px]">
          <div className="content lg:pr-[390px] pr-20 pl-3 lg:pt-44 pt-28">
            <p className='text-1 font-semibold lg:text-[72px] text-[30px]'>The Best Kindergarden School For Your Child</p>
            <p className='lg:text-[20px] text-white'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
          </div>
          <div className="button ml-3 lg:mt-10 mt-7 space-x-5">
            <button className='bg-[#fe6d4b] rounded-full lg:py-4 py-2 lg:px-10 px-4 text-white'>Learn More</button>

            <button className='bg-[#103741] rounded-full lg:py-4 py-2 lg:px-10 px-4 text-white'>Our Classes</button>
          </div>
        </div>

        <div className="slider_02 w-fit xl:h-[742.33px] h-[500px]">
          <div className="content lg:pr-[390px] pr-20 pl-3 lg:pt-44 pt-28">
            <p className='text-1 font-semibold lg:text-[72px] text-[30px]'>Make A Brighter Future Of Your Child</p>
            <p className='lg:text-[20px] text-white'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
          </div>
          <div className="button ml-3 lg:mt-10 mt-7 space-x-5">
            <button className='bg-[#fe6d4b] rounded-full lg:py-4 py-2 lg:px-10 px-4 text-white'>Learn More</button>

            <button className='bg-[#103741] rounded-full lg:py-4 py-2 lg:px-10 px-4 text-white'>Our Classes</button>
          </div>
        </div>
      </Slider>

      <div className="header_bottom absolute h-[19px] xl:w-[1326px] w-full xl:ml-[105px] z-10 mt-[-18px] ">
      </div>
    </>
  )
}
export default HomeSlider