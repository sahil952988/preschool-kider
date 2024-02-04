import React from 'react'
import "../../style/LearnMore.css"
import im01 from "../../Assets/learn_more_img-1.jpg"
import img02 from "../../Assets/Learn_more_img-2.jpg"
import img03 from "../../Assets/Learn_more_img-3.jpg"
import user from "../../Assets/user.jpg"


const LearnMore = () => {
  return (
    <>
      <div className="Lear_More 2xl:mx-[105px]  bg-white pt-20 lg:flex lg:pb-[100px] pb-[100px] md:pb-[200px] ">

        <div className="Left_side px-[24px] lg:w-[50%] mt-[48px]">
          <p className='text1 md:text-[40px] text-[27px]'>Learn More About Our Work And Our Cultural Activities</p>

          <p className='text-[#74787C] md:mt-10 mt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

          <p className='text-[#74787C] mt-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>

          <div className="buttons mt-8 mb-20 sm:flex ">
            <button className='bg-[#fe7555] text-white py-4 px-12 rounded-full'>Read More</button>

            <div className="user flex sm:ml-[150px] space-x-3 md:mt-0 mt-5 md:mb-0 pb-5">
              <p className="img"><img className='w-[45px] h-[45px] rounded-[50%]' src={user} alt="" /></p>

              <div className="detials ">
                <p className='text-[#FE5D37] font-semibold'>Jhon Doe</p>
                <p className='text-[#74787C] text-[14px]'>CEO & Founder</p>
              </div>
            </div>
          </div>

        </div>

        <div className="right_side lg:ml-24 mx-[24px] flex justify-center">

          <div className=' flex justify-center'>

            <div className="img1 bg-[#FFF5F3] hover:bg-[#FE5D37] rounded-full
             2xl:w-[459px] 2xl:h-[459px] 
             xl:w-[400px] xl:h-[400px] 
             lg:w-[333px]  lg:h-[333px] 
             md:w-[522px] md:h-[522px] 
             sm:w-[387px] sm:h-[387px]
             w-[245px] h-[245px]">

              <img className='rounded-full
               2xl:w-[428px] 2xl:h-[443px]
               xl:w-[369px] xl:h-[384px] 
               lg:w-[302px] lg:h-[317px] 
               md:w-[491px] md:h-[506px]
               sm:w-[356px] sm:h-[371px] 
               w-[214px] h-[229px]  
               ml-4 pt-4 ' src={im01} alt="01" />
            </div>



            <div className="img2 absolute 2xl:mt-[310px] 2xl:ml-[-320px] xl:mt-[260px] xl:ml-[-280px] lg:mt-[190px] lg:ml-[-240px] md:mt-[370px] md:ml-[-370px] sm:mt-[240px] sm:ml-[-270px] mt-[150px] ml-[-180px] bg-[#FFF5F3] hover:bg-[#FE5D37] rounded-full
             2xl:w-[294px] 2xl:h-[294px]
             xl:w-[255px] xl:h-[255px]
             lg:w-[210px] lg:h-[210px]
             md:w-[336px] md:h-[336px]
             sm:w-[246px] sm:h-[246px]
             w-[151px] h-[151px] 
             ">

              <img className='rounded-full pt-4 pl-4 
              2xl:w-[280px] 2xl:h-[280px]
              xl:w-[241px] xl:h-[241px]
              lg:w-[196px] lg:h-[196px]
              md:w-[322px] md:h-[322px]
              sm:w-[232px] sm:h-[232px]
              w-[137px] h-[137px] 
              ' src={img02} alt="" />
            </div>


            <div className="img3 absolute 2xl:mt-[310px] 2xl:ml-[320px] xl:mt-[260px] xl:ml-[280px] lg:mt-[190px] lg:ml-[240px] md:mt-[370px] md:ml-[370px] sm:mt-[240px] sm:ml-[270px] mt-[150px] ml-[180px] bg-[#FFF5F3] hover:bg-[#FE5D37] rounded-full
             2xl:w-[294px] 2xl:h-[294px]
             xl:w-[255px] xl:h-[255px]
             lg:w-[210px] lg:h-[210px]
             md:w-[336px] md:h-[336px]
             sm:w-[246px] sm:h-[246px]
             w-[151px] h-[151px] 
             ">

              <img className='rounded-full pt-4 pl-4 
              2xl:w-[280px] 2xl:h-[280px]
              xl:w-[241px] xl:h-[241px]
              lg:w-[196px] lg:h-[196px]
              md:w-[322px] md:h-[322px]
              sm:w-[232px] sm:h-[232px]
              w-[137px] h-[137px] 
              ' src={img03} alt="" />
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
export default LearnMore