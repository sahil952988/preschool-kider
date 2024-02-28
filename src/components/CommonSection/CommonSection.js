import React from 'react'
import "../../style/CommonSection.css"
const CommonSection = ({ title }) => {
  return (
    <>
      <div className="header_top absolute h-[10px] 2xl:w-[1320px] xl:w-[1280px] lg:w-[1000px] md:w-[768px] sm:w-[640px] w-[375px] 2xl:ml-[105px] z-10 ">
      </div>
      <section className="common__section 2xl:mx-[105px] ">
        <div className="title  text-white md:text-[40px] text-[27px]">
          <h1>{title}</h1>
        </div>
        <h1 className='text-[#cb4a2c] text-[19px] 2xl:mx-[50px]'>Home <span className='text-[#74787C]'>/</span> Pages <span className='text-[#74787C]'>/</span><span className='text-white'> {title}</span></h1>

      </section>
      <div className="header_bottom absolute h-[19px] 2xl:w-[1320px] xl:w-[1280px] lg:w-[1000px] md:w-[768px] sm:w-[640px] w-[375px] 2xl:ml-[105px] z-10 mt-[-18px] ">
      </div>
    </>
  )
}
export default CommonSection