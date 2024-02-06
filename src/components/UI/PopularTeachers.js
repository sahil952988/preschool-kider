import React from 'react'
import "../../style/PopularTeachers.css"
import teacher01 from "../../Assets/PopularTeacher01.jpg"
import teacher02 from "../../Assets/PopularTeacher02.jpg"
import teacher03 from "../../Assets/PopularTeacher03.jpg"
const PopularTeachers = () => {
  return (
    <>
      <div className="main 2xl:mx-[105px] bg-white">
        <div className="pt-20 pb-10">
          <p className='Popular_Teachers text-center md:text-[40px]  text-[28px] font-semibold'>Popular Teachers</p>

          <p className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>

        {/* ---------- TEACHERS ------------------ */}

        <div class="images grid lg:grid-cols-3 md:grid-cols-2 gap-4 pb-10">


          <div className="img01">

            <div className="img_circle relative ">
              <img className='ml-5 2xl:h-[535px] xl:h-[467px] lg:h-[388px] md:h-[441px] sm:h-[677px] h-[429px] rounded-[50%]' src={teacher01} alt="" />

              <div className="info_circle absolute w-[250px] h-[250px] rounded-full bg-white border-[15px] border-[#FFF5F3]  mt-[-250px] xl:ml-[180px] lg:ml-[80px] md:ml-[100px] sm:ml-[280px] ml-[100px] ">

                <div className="info text-center py-10">
                  <p className='FullName text-[28px]'>Full Name</p>
                  <p className='text-[#74787C] pt-2'>Designation</p>

                  <div className="contact flex justify-center space-x-3 pt-5">
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-facebook"></i></p>
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-twitter"></i></p>
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-instagram"></i></p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* ---------------- 2nd Image ------ */}
          <div className="img02">

            <div className="img_circle relative ">
              <img className='ml-5 2xl:h-[535px] xl:h-[467px] lg:h-[388px] md:h-[441px] sm:h-[677px] h-[429px] rounded-[50%]' src={teacher02} alt="" />

              <div className="info_circle absolute w-[250px] h-[250px] rounded-full bg-white border-[15px] border-[#FFF5F3]  mt-[-250px] xl:ml-[180px] lg:ml-[80px] md:ml-[100px]  sm:ml-[280px] ml-[100px]">

                <div className="info text-center py-10">
                  <p className='FullName text-[28px]'>Full Name</p>
                  <p className='text-[#74787C] pt-2'>Designation</p>

                  <div className="contact flex justify-center space-x-3 pt-5">
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-facebook"></i></p>
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-twitter"></i></p>
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-instagram"></i></p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* --------- 3rd image ---------- */}

          <div className="img03">
            <div className="img_circle relative ">
              <img className='ml-5 2xl:h-[535px] xl:h-[467px] lg:h-[388px] md:h-[441px] sm:h-[677px] h-[429px] rounded-[50%]' src={teacher03} alt="" />

              <div className="info_circle absolute w-[250px] h-[250px] rounded-full bg-white border-[15px] border-[#FFF5F3]  mt-[-250px] 2xl:ml-[180px] xl:ml-[150px] lg:ml-[80px] md:ml-[100px]  sm:ml-[280px] ml-[100px]">

                <div className="info text-center py-10">
                  <p className='FullName text-[28px]'>Full Name</p>
                  <p className='text-[#74787C] pt-2'>Designation</p>

                  <div className="contact flex justify-center space-x-3 pt-5">
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-facebook"></i></p>
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-twitter"></i></p>
                    <p className='bg-[#fe6d4b] rounded-full h-[38px] w-[38px] pt-2 text-white hover:bg-[#fe7555]'><i class="fa-brands fa-instagram"></i></p>
                  </div>
                </div>
              </div>

            </div>

          </div>











        </div>
      </div>
    </>
  )
}
export default PopularTeachers