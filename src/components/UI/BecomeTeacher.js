import React, { useEffect } from 'react'
import "../../style/BecomeTeacher.css"
import become_teacherimg from "../../Assets/BecomeTeacher.jpg"
import Aos from 'aos'
import "aos/dist/aos.css"

const BecomeTeacher = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1 });
  }, [])
  return (
    <>
      <div className="main 2xl:mx-[105px] bg-white lg:flex">


        <div className="left_side pl-8 lg:pr-0 pr-8 ">
          <img data-aos="zoom-in" className='rounded-[8px] lg:w-[636px] w-[100%] h-[400px] object-cover' src={become_teacherimg} alt="teacherimg" />
        </div>

        <div className="right_side lg:w-[50%]  lg:pr-24  pr-8 pl-12 bg-[#FFF5F3] mr-8  lg:ml-0 ml-8 rounded-[8px]">

          <p className='Become_teacher lg:text-[40px] text-[27px] font-semibold lg:pt-[100px] pt-10'>Become A Teacher</p>

          <p className='text-[#74787C] pt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet </p>

          <div className=" pt-5 items-center">
            <button className='bg-[#FE5D37] text-white  rounded-[10px] w-[100%] py-4'>Get Started Now <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

      </div>



    </>
  )
}
export default BecomeTeacher