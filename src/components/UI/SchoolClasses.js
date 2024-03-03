import React, { useEffect } from 'react'
import "../../style/SchoolClasses.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useGetClassesQuery } from '../../Features/ClassApi'
import Teacher from '../Teacher'

const SchoolClasses = () => {
  const { data: classData } = useGetClassesQuery();

  useEffect(() => {
    Aos.init({ delay: 1, duration: 1200 });
  }, [])
  return (
    <>
      <div data-aos="fade-up" className="All_item  2xl:mx-[105px] bg-white lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 px-10  gap-5 md:space-y-0 space-y-5">
        {classData && classData.map(detail => (
          <div>
            {/* class ko main photo */}
            <div className="flex justify-center">
              <div className="IMAGE w-[273px] bg-[#FFF5F3]  h-[273px] rounded-full ">
                <img src={`${detail.photo}`} alt="" className='rounded-full pl-4 pt-3 w-[259px] h-[259px]' />
              </div>
            </div>

            <div className="info bg-[#FFF5F3] pt-20 mt-[-48px] rounded-[8px]">

              <h1 className='subjects text-[28px] text-center'>{detail.classname}</h1>

              <div className="flex justify-between px-5 pt-5">
                <div className="user flex  space-x-3 md:mt-0 mt-5 md:mb-0 pb-5">

                  <div className="detials ">
                    <p className='text-[#FE5D37] font-bold'><Teacher teacher={detail.teacher} /></p>
                    <p className='text-[#74787C] text-[14px]'>
                      <Teacher teacher={detail.profession} /></p>
                  </div>
                </div>


                <button className='bg-[#FE5D37] text-white rounded-[50rem] px-5 h-10'>{detail.fee}</button>
              </div>

              <div className="Lower_info flex justify-between px-5 pb-3">

                <h3 className='border-t-[3px] border-t-[#FE5D37] w-[110px]'>
                  <p className='font-bold text-[#FE5D37]'>Age:</p>
                  <span className='text-[14px] text-[#74787C]'>{detail.age}</span></h3>

                <h3 className='border-t-[3px] border-t-[#198754] w-[110px] '>
                  <p className='font-bold text-[#198754]'>Time:</p><span className='text-[14px] text-[#74787C]'>{detail.time}</span></h3>

                <h3 className='border-t-[3px] border-t-[#ffc107] w-[110px]'>
                  <p className='font-bold text-[#ffc107]'>Capacity:</p><span className='text-[14px] text-[#74787C]'>{detail.capacity}</span></h3>
              </div>


            </div>

          </div>

        ))}
      </div>

    </>
  )
}
export default SchoolClasses