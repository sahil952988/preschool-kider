import React from 'react'
import "../style/Contact.css"
import CommonSection from '../components/CommonSection/CommonSection'
const ContactUs = () => {
  return (
    <>
      <CommonSection title='Contact Us' />
      <div className="main 2xl:mx-[105px] bg-white pb-20">
        <div className="pt-20 pb-10">
          <p className='getInTouch text-center md:text-[40px]  text-[28px] font-semibold'>Get In Touch</p>

          <p className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        {/* 
------------ICONS --------------- */}
        <div className="contact lg:flex lg:justify-evenly  grid md:grid-cols-2  pt-16 space-y-8">

          <div>
            <div className="flex justify-center ">
              <h1 className='text-[#FE5D37] text-[32px] rounded-full h-[75px] w-[75px] bg-[#FFF5F3] text-center pt-3'><i class="fa-solid fa-location-dot"></i></h1></div>

            <p className='font-semibold mt-5 text-[20px] text-center'>123 Street, New York, USA</p>
          </div>

          <div className="">
            <div className="flex justify-center ">
              <h1 className='text-[#FE5D37] text-[32px] rounded-full h-[75px] w-[75px] bg-[#FFF5F3] text-center pt-3'><i class="fa-regular fa-envelope-open"></i></h1>  </div>
            <p className='font-semibold mt-5 text-[20px] text-center'>info@example.com</p>

          </div>

          <div className="">
            <div className="flex justify-center ">
              <h1 className='text-[#FE5D37] text-[32px] rounded-full h-[75px] w-[75px] bg-[#FFF5F3] text-center pt-3'><i class="fa-solid fa-phone"></i></h1>  </div>
            <p className='font-semibold mt-5 text-[20px] text-center'>+012 345 6789</p>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}

        <div className="all  lg:flex   bg-[#FFF5F3]  rounded-[8px]  mt-20 sm:mx-10 mx-3">
          <div className="left_side lg:w-[50%] py-10  xl:px-16 sm:px-10 px-3">
            <h1 className='pb-10 text-[#74787C] font-semibold text-[18px]'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span className='text-[#cb4a2c]'> Download Now.</span></h1>

            <div className="form ">

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="input-wrap">
                  <input type="text" className='input' required />
                  <label htmlFor="" className='py-5'>
                    Your Name
                  </label>
                </div >
                <div className="input-wrap ">
                  <input type="text" className='input' required />
                  <label htmlFor="">
                    Your Email
                  </label>
                </div >
              </div>

              <div className="input-wrap  mt-5">
                <input type="text" className='input' required />
                <label htmlFor="">
                  Subject
                </label>
              </div >


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
          </div>

          <div className="map   ">
            <iframe className='lg:w-[536px] xl:w-[700px] w-full rounded-[10px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.860098995398!2d85.30280967514705!3d27.690718526225336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1986f176b985%3A0x5f1d82d0bf0c4f81!2sNabil%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1707655313527!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>



        </div>


      </div >
    </>
  )
}
export default ContactUs