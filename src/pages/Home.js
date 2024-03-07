import BecomeTeacher from "../components/UI/BecomeTeacher"
import LearnMore from "../components/UI/LearnMore"
import SchoolClasses from "../components/UI/SchoolClasses"
import SchoolFacilities from "../components/UI/SchoolFacilities"
import HomeSlider from "../components/UI/Sliders/HomeSlider"
import MakeAppointment from "../components/UI/MakeAppointment"
import PopularTeachers from "../components/UI/PopularTeachers"
import TestimonialSlider from "../components/UI/TestimonialSlider"
import { useEffect } from "react"
import Aos from 'aos'
import "aos/dist/aos.css"
import Paginations from "../components/Paginations"






const Home = () => {


  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1 });
  }, [])
  return (
    <>
      <HomeSlider />
      <SchoolFacilities />
      <LearnMore />
      <BecomeTeacher />

      {/* 
============== school Classes ====== */}
      <div className="main 2xl:mx-[105px] bg-white">
        <div className="pt-20 pb-10">
          <p data-aos="fade-up" className='school_Facilites text-center md:text-[40px]  text-[28px] font-semibold'>School Classes</p>

          <p data-aos="fade-up" className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
      </div>
      {/* 
      <SchoolClasses /> */}
      {/* ------------------------------ */}

      <section>
        <Paginations />
      </section>




      <MakeAppointment />


      <PopularTeachers />

      <TestimonialSlider />



    </>
  )
}
export default Home