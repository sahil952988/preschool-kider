import React from 'react'
import "../../style/CommonSection.css"
const CommonSection = ({ title }) => {
  return (
    <>
      <section className="common__section mb-5">
        <div className="text-white md:text-[40px] text-[27px]">
          <h1>{title}</h1>
        </div>
      </section>
    </>
  )
}
export default CommonSection