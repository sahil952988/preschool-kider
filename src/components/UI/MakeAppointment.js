import React from 'react'
import appointmentImg from "../../Assets/appointment.jpg"
import "../../style/MakeAppointment.css"
const MakeAppointment = () => {
  return (
    <>
      <div className="2xl:mx-[105px] bg-white pt-28 ">

        <div className="all lg:flex bg-[#FFF5F3] mx-8 rounded-[8px]">

          <div className="left_side  rounded-l-[8px] sm:ml-10 px-10 lg:w-[50%] lg:mr-10">
            <p className='appointment lg:text-[40px] sm:text-[33px] text-[25px] font-bold pt-12'>Make Appointment</p>

            <div className="form1 mt-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 space-y-5">
              <div className="input-wrap">
                <input type="text" className='input' required />
                <label htmlFor="">
                  Gurdian Name
                </label>
              </div >

              <div className="input-wrap ">
                <input type="text" className='input' required />
                <label htmlFor="">
                  Gurdian Email
                </label>
              </div >



              <div className="input-wrap">
                <input type="text" className='input' required />
                <label htmlFor="">
                  Child Name
                </label>
              </div >

              <div className="input-wrap ">
                <input type="text" className='input' required />
                <label htmlFor="">
                  Age
                </label>
              </div >

            </div>



            <div className="form3 mt-5 space-x-5">
              <div className="message-wrap">
                <input type="text" className='message' required />
                <label htmlFor="">
                  Message
                </label>
              </div >
            </div>

            <button className='w-[100%] bg-[#fe6d4b] mt-5 text-white py-4 rounded-[10px] hover:bg-[#fe7555] font-semibold'>Submit</button>
          </div>

          {/* =============== RIGHT SIDE ======================== */}
          <div className="right_side lg:mt-0 mt-10">
            <img src={appointmentImg} alt="img" className='rounded-[10px] h-[489.6px] lg:w-[636px] w-full first-line:' />
          </div>
        </div>
      </div >
    </>
  )
}
export default MakeAppointment