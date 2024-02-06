import React from 'react'
import Slider from 'react-slick'
import user1 from "../../Assets/testimonial-1.jpg"
import user2 from "../../Assets/testimonial-2.jpg"
import user3 from "../../Assets/testimonial-3.jpg"
import "../../style/Testimonial.css"

const TestimonialSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="main 2xl:mx-[105px] bg-white">
        <div className="pt-20 pb-10">
          <p className='Popular_Teachers text-center md:text-[40px]  text-[28px] font-semibold'>Our Clients Say!</p>

          <p className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>

        {/* ------------- Slider -------------- */}

        <Slider {...settings} className='mx-10  pb-12'>
          <div className="slider01  bg-[#FFF5F3] rounded-[10px]">
            <p className='text-[#74787C] text-[20px] pt-10 px-10 '>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>

            <div className="flex rounded-l-[50px] bg-white mb-10 ml-10 mt-5">
              <p className="img"><img className='w-[90px] h-[90px] rounded-[50%]' src={user1} alt="" /></p>

              <div className='pl-5'>
                <p className='Client_Name text-[#103741] text-[28px] font-bold'>Client Name</p>
                <p className='text-[#74787C] text-[14px] leading-[24px] font-semibold'>Profession</p>
              </div>

              <p className='hidden sm:block xl:pl-[250px] lg:pl-[100px] pr-5 text-[48px]'><i class="fa-solid fa-quote-right text-[#FE5D37]"></i></p>
            </div>
          </div>

          <div className="slider02  rounded-[10px] bg-[#FFF5F3] ">
            <p className='text-[#74787C] text-[20px] pt-10 px-10 '>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>

            <div className="flex rounded-l-[50px] bg-white mb-10 ml-10 mt-5">
              <p className="img"><img className='w-[90px] h-[90px] rounded-[50%]' src={user2} alt="" /></p>

              <div className='pl-5'>
                <p className='Client_Name text-[#103741] text-[28px] font-bold'>Client Name</p>
                <p className='text-[#74787C] text-[14px] leading-[24px] font-semibold'>Profession</p>
              </div>

              <p className='xl:pl-[250px] lg:pl-[100px] pr-5 text-[48px]'><i class="fa-solid fa-quote-right text-[#FE5D37]"></i></p>
            </div>
          </div>


          <div className="slider03 rounded-[10px] bg-[#FFF5F3] ">
            <p className='text-[#74787C] text-[20px] pt-10 px-10 '>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>

            <div className="flex rounded-l-[50px] bg-white mb-10 ml-10 mt-5">
              <p className="img"><img className='w-[90px] h-[90px] rounded-[50%]' src={user3} alt="" /></p>

              <div className='pl-5'>
                <p className='Client_Name text-[#103741] text-[28px] font-bold'>Client Name</p>
                <p className='text-[#74787C] text-[14px] leading-[24px] font-semibold'>Profession</p>
              </div>

              <p className='xl:pl-[250px] lg:pl-[100px] md:pl-[100px] pr-5 text-[48px]'><i class="fa-solid fa-quote-right text-[#FE5D37]"></i></p>
            </div>


          </div>


        </Slider>

      </div>
    </>
  )
}
export default TestimonialSlider