import React from 'react'
import "../style/SchoolFacilities.css"
const SchoolFacilities = () => {


  return (
    <>
      <div className="main xl:ml-[105px] xl:mr-[105px] bg-white">

        <div className="pt-20">
          <p className='school_Facilites text-center md:text-[40px]  text-[28px] font-semibold'>School Facilities</p>

          <p className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>


        {/* ====================1 =================== */}

        <div className="main sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 lg:space-y-0 space-y-5">
          <div className="parent1">

            <div className="flex justify-center">
              <p className='child1 text-[48px] text-[#FE5D37]  rounded-full w-[100px] h-[100px] text-center pt-3 '><i class="fa-solid fa-bus"></i></p>
            </div>

            <div className="flex justify-center">
              <div className=" child1 flex flex-col text-center w-[300px]  rounded-[100%]">

                <p className='textbg1 cursive_font text-[#FE5D37] pt-[40px] pb-3 px-[20px] text-[28px] font-semibold'>School Bus</p>

                <p className='textbg1 text-[#6c757d] pb-[40px] px-[20px] ml-8 mr-8'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
              </div>
            </div>
          </div>


          {/* 
===================2 ================= */}
          <div className="parent2">

            <div className="flex justify-center">
              <p className='child2 text-[48px] text-[#198754]  rounded-full w-[100px] h-[100px] text-center pt-3 '><i class="fa-solid fa-futbol"></i></p>
            </div>

            <div className="flex justify-center">
              <div className=" child2 flex flex-col text-center w-[300px]  rounded-[100%]">

                <p className='textbg2 cursive_font text-[#198754] pt-[40px] pb-3 px-[20px] text-[28px] font-semibold'>Playground</p>

                <p className='textbg2 text-[#6c757d] pb-[40px] px-[20px] ml-8 mr-8'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
              </div>
            </div>
          </div>


          {/* ===============3====================== */}


          <div className="parent3">

            <div className="flex justify-center">
              <p className='child3 text-[48px] text-[#ffc107]   rounded-full w-[100px] h-[100px] text-center pt-3 '><i class="fa-solid fa-house-chimney"></i></p>
            </div>

            <div className="flex justify-center">
              <div className=" child3 flex flex-col text-center w-[300px]  rounded-[100%]">

                <p className='textbg3 cursive_font text-[#ffc107] pt-[40px] pb-3 px-[20px] text-[28px] font-semibold'>Healthy Canteen</p>

                <p className='textbg3 text-[#6c757d] pb-[40px] px-[20px] ml-8 mr-8'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
              </div>
            </div>
          </div>

          {/* =============== 4 ======================= */}


          <div className="parent4">

            <div className="flex justify-center">
              <p className='child4 text-[48px] text-[#0dcaf0]  rounded-full w-[100px] h-[100px] text-center pt-3 '><i class="fa-solid fa-chalkboard-user"></i></p>
            </div>

            <div className="flex justify-center">
              <div className=" child4 flex flex-col text-center w-[300px]  rounded-[100%]">

                <p className='textbg4 cursive_font text-[#0dcaf0] pt-[40px] pb-3 px-[20px] text-[28px] font-semibold'>Positive Leaening</p>

                <p className='textbg4 text-[#6c757d] pb-[40px] px-[20px] ml-8 mr-8'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
              </div>
            </div>
          </div>


        </div>




      </div>
    </>
  )
}
export default SchoolFacilities