import React from 'react'
import Data from "../../Assets/ClassesData"
import "../../style/SchoolClasses.css"
import user from "../../Assets/user.jpg"
const SchoolClasses = (props) => {
  const { imgUrl
    , subject, Fee, Age, Time, Capacity } = props.item;
  return (
    <>
      <div className="All_item ">
        <div className="flex justify-center">
          <div className="IMAGE w-[273px] bg-[#FFF5F3]  h-[273px] rounded-full ">
            <img className='rounded-full pl-4 pt-3 w-[259px] h-[259px]' src={imgUrl} alt="" />
          </div>
        </div>

        <div className="info bg-[#FFF5F3] pt-20 mt-[-48px] rounded-[8px]">

          <h1 className='subjects text-[28px] text-center'>{subject}</h1>

          <div className="flex justify-between px-5 pt-5">
            <div className="user flex  space-x-3 md:mt-0 mt-5 md:mb-0 pb-5">
              <p className="img"><img className='w-[45px] h-[45px] rounded-[50%]' src={user} alt="" /></p>

              <div className="detials ">
                <p className='text-[#FE5D37] font-bold'>Jhon Doe</p>
                <p className='text-[#74787C] text-[14px]'>Teacher</p>
              </div>
            </div>

            <button className='bg-[#FE5D37] text-white rounded-[50rem] px-5 h-10'>{Fee}</button>
          </div>

          <div className="Lower_info flex justify-between px-5 pb-3">

            <h3 className='border-t-[3px] border-t-[#FE5D37] w-[110px]'>
              <p className='font-bold text-[#FE5D37]'>Age:</p>
              <span className='text-[14px] text-[#74787C]'>{Age}</span></h3>

            <h3 className='border-t-[3px] border-t-[#198754] w-[110px] '>
              <p className='font-bold text-[#198754]'>Time:</p><span className='text-[14px] text-[#74787C]'>{Time}</span></h3>

            <h3 className='border-t-[3px] border-t-[#ffc107] w-[110px]'>
              <p className='font-bold text-[#ffc107]'>Capacity:</p><span className='text-[14px] text-[#74787C]'>{Capacity}</span></h3>
          </div>


        </div>
      </div>

    </>
  )
}
export default SchoolClasses