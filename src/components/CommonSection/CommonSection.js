import React from 'react'
import "../../style/CommonSection.css"
const CommonSection = ({ title }) => {
  return (
    <>
      <div className="header_top absolute h-[10px] 2xl:w-[1500px] xl:w-[1280px] w-full 2xl:ml-[105px] z-10 ">
      </div>
      <section className="common__section 2xl:mx-[105px] ">
        <div className="title  text-white md:text-[40px] text-[27px]">
          <h1>{title}</h1>
        </div>
      </section>
      <div className="header_bottom absolute h-[19px] 2xl:w-[1500px]  xl-[1280px] w-full 2xl:ml-[105px] z-10 mt-[-18px] ">
      </div>
    </>
  )
}
export default CommonSection