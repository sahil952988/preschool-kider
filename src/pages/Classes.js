import CommonSection from "../components/CommonSection/CommonSection"
import classData from "../Assets/ClassesData"
import MakeAppointment from "../components/UI/MakeAppointment"
import SchoolClasses from "../components/UI/SchoolClasses"
import TestimonialSlider from "../components/UI/TestimonialSlider"

const Classes = () => {
  return (
    <>
      <CommonSection title=' Classes' />


      <div className="main 2xl:mx-[105px] bg-white">
        <div className="pt-20 pb-10">
          <p className='school_Facilites text-center md:text-[40px]  text-[28px] font-semibold'>School Classes</p>

          <p className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
      </div>

      <div className="main 2xl:mx-[105px] bg-white">
        <section className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 px-10  gap-5 md:space-y-0 space-y-5">
          {
            classData.map((item) => {
              return (
                <SchoolClasses item={item} />
              )
            })
          }
        </section>
      </div>


      <MakeAppointment />


      <TestimonialSlider />
    </>
  )
}
export default Classes