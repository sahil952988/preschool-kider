import React from 'react'
import galleryimg01 from "../../Assets/gallery1.jpg"
import galleryimg02 from "../../Assets/gallery2.jpg"
import galleryimg03 from "../../Assets/gallery3.jpg"
import galleryimg04 from "../../Assets/gallery4.jpg"
import galleryimg05 from "../../Assets/gallery5.jpg"
import galleryimg06 from "../../Assets/gallery6.jpg"
import "../../style/Footer.css"
const Footer = () => {
  return (
    <>
      <div className="FOOTER 2xl:mx-[105px] bg-[#103741]">

        <div className="items grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-10  border-b-[1.5px] mx-8  border-b-white">

          <div className="item01 sm:pl-8  space-y-3">
            <h1 className='heading text-white text-[28px] font-bold'>Get In Touch</h1>
            <p className='space-x-3 text-[#6c757d] font-semibold'><i class="fa-solid fa-location-dot"></i> <span> 123 Street, New York, USA</span></p>

            <p className='space-x-3 text-[#6c757d] font-semibold'><i class="fa-solid fa-phone"></i>  <span> +012 345 67890</span></p>

            <p className='space-x-3 text-[#6c757d] font-semibold'><i class="fa-solid fa-envelope"></i> <span> info@example.com</span></p>

            <div className="link flex space-x-1">
              <p className="text-white h-[45px] w-[45px] rounded-full border-2 border-[#6c757d] flex justify-center pt-3 "><i class="fa-brands fa-twitter"></i></p>
              <p className="text-white h-[45px] w-[45px] rounded-full border-2 border-[#6c757d] flex justify-center pt-3 "><i class="fa-brands fa-facebook"></i></p>
              <p className="text-white h-[45px] w-[45px] rounded-full border-2 border-[#6c757d] flex justify-center pt-3 "><i class="fa-brands fa-youtube"></i></p>
              <p className="text-white h-[45px] w-[45px] rounded-full border-2 border-[#6c757d] flex justify-center pt-3 "><i class="fa-brands fa-linkedin-in"></i></p>
            </div>

          </div>

          {/* ----------------- item 02 -------------------- */}

          <div className="item02 sm:pl-8 space-y-2">
            <h1 className='heading text-white text-[28px] font-bold'>Quick Links</h1>

            <div className='Quick_links cursor-pointer text-[#6c757d] font-semibold'><i class="fa-solid fa-chevron-right"></i> About Us</div>


            <div className='text-[#6c757d] font-semibold'><i class="fa-solid fa-chevron-right"></i> <span>Contact Us</span></div>

            <p className='text-[#6c757d] font-semibold'><i class="fa-solid fa-chevron-right"></i> <span>our Services</span></p>
            <p className='text-[#6c757d] font-semibold'><i class="fa-solid fa-chevron-right"></i> <span>Privacy Policy</span></p>
            <p className='text-[#6c757d] font-semibold'><i class="fa-solid fa-chevron-right"></i> <span>Terms & Conditions</span></p>

          </div>

          {/* ----------------- item 03 -------------------- */}
          <div className="item03 pr-10 sm:pl-8  space-y-2">
            <h1 className='heading text-white text-[28px] font-bold'>Photo Gallery</h1>

            <div className="images pt-4 space-y-2">
              <div className="img-row1 flex space-x-2">
                <img className="md:w-[88px] sm:w[166px] w-[103px] md:h-[88px] sm:h-[166px] h-[103px] rounded-[10px] border-[5px] border-[#FFF5F3]" src={galleryimg01} alt="" />
                <img className="md:w-[88px] sm:w[166px] md:h-[88px] sm:h-[166px] w-[103px] h-[103px] rounded-[10px] border-[5px] border-[#FFF5F3]" src={galleryimg02} alt="" />
                <img className="md:w-[88px] sm:w[166px] md:h-[88px] sm:h-[166px] w-[103px] h-[103px] rounded-[10px] border-[5px] border-[#FFF5F3]" src={galleryimg03} alt="" />
              </div>

              <div className="img-row-01 flex space-x-2">
                <img className="md:w-[88px] sm:w[166px] md:h-[88px] sm:h-[166px] w-[103px] h-[103px] rounded-[10px] border-[5px] border-[#FFF5F3]" src={galleryimg04} alt="" />
                <img className="md:w-[88px] sm:w[166px] md:h-[88px] sm:h-[166px] w-[103px] h-[103px] rounded-[10px] border-[5px] border-[#FFF5F3]" src={galleryimg05} alt="" />
                <img className="md:w-[88px] sm:w[166px] md:h-[88px] sm:h-[166px] w-[103px] h-[103px] rounded-[10px] border-[5px] border-[#FFF5F3]" src={galleryimg06} alt="" />
              </div>
            </div>

          </div>

          {/* ----------------- item 04 -------------------- */}
          <div className="item04 pr-5 pl-8 space-y-2 ">
            <h1 className='heading text-white text-[28px] font-bold '>Newsletter</h1>
            <p className='text-[#6c757d] font-semibold pt-4 pb-5'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

            <div className="form border-2 border-white rounded-[10px] pl-2 py-2 space-x-2">
              <input className='bg-[#103741] outline-none text-[#6c757d] xl:w-[70%] md:w-[50%] sm:w-[83%] w-[65%]' type="text" placeholder='Your Email' />
              <button className='bg-[#fe7555] rounded-[10px] px-2 py-2'>SignUp</button>
            </div>


          </div>


        </div>

        <div className="md:flex justify-between pt-6 pb-10" >

          <div className="copyright xl:mr-[600px] lg:mr-[250px] md:mr-[170px] sm:mx-20 mx-10">
            <p className=' text-[#6c757d] '>©<span className='text-white'><u> Your Site Name</u></span>, All Right Reserved. Designed By <span className='text-white'><u>Sahil Ali</u></span> Distributed By: <span className='text-white'><u>Sahil</u></span></p>
          </div>

          <div className="navlink mr-5 md:pl-0 sm:px-36 mx-10 md:pt-0 sm:pt-5 pt-5  space-x-5">
            <a className='text-white border-r-2 border-r-[#6c757d] pr-4' href="#">Home</a>
            <a className='text-white border-r-2 border-r-[#6c757d] pr-4' href="#">Cookies</a>
            <a className='text-white border-r-2 border-r-[#6c757d] pr-4' href="#">Help</a>
            <a className='text-white border-r-2 border-r-[#6c757d] pr-4' href="#">FQAs</a>
          </div>
        </div>



      </div>
    </>
  )
}
export default Footer