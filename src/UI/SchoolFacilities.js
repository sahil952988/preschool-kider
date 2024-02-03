import React from 'react'
import "../style/SchoolFacilities.css"
const SchoolFacilities = () => {
  return (
    <>
      <div className="main ml-[105px] mr-[105px] bg-white">

        <div className="pt-20">
          <p className='school_Facilites text-center text-[40px] font-semibold'>School Facilities</p>

          <p className='text-center ml-[360px] mr-[350px] mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>



        <div className="bear_animated h-[400px] w-[400px] bg-black hover:bg-red-400">

          <div className="animated_1 flex justify-center">

            <p className='text-[48px] text-[#fe6d4b] bg-green-200  rounded-full w-[100px] h-[100px] text-center pt-3 '><i class="fa-solid fa-bus"></i></p>
          </div>
          <div className="content bg-green-200 ">
            <p className='text-[28px]'>School Bus</p>
            <p>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
          </div>

        </div>




      </div>
    </>
  )
}
export default SchoolFacilities