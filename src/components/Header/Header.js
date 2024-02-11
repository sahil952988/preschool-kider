import React, { useRef } from 'react'
import "../../style/Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <>
      <div className="flex justify-between bg-white 2xl:mx-[105px] lg:border-0 border-[1.5px] border-gray-400">
        <div className="lg:py-4 py-3 lg:pl-12 ml-3">
          <p className="logo text-[#FE5D37] lg:text-[40px] text-[25px] font-bold space-x-2"><i class="fa-solid fa-book-open-reader"></i>  Kider</p>
        </div>

        <div className="hidden lg:block">
          <div className=" flex space-x-7 font-semibold cursor-pointer mt-8">
            <Link to="/Home"> <p className='hover:text-[#FE5D37] focus:text-[#FE5D37]'>Home</p></Link>
            <Link to="/AboutUs"><p className='hover:text-[#FE5D37]   '>About Us</p></Link>
            <Link to="/Classes"><p className='hover:text-[#FE5D37]'>Classes</p></Link>
            <Link><p className='hover:text-[#FE5D37]'>Pages</p></Link>
            <Link to="/ContactUs"><p className='hover:text-[#FE5D37]'>Contact Us</p></Link>
          </div>
        </div>



        <div className="menu lg:hidden border-[2px] border-gray-200 hover:border-[5px] hover:border-gray-500  rounded-[15px] px-3  mr-5 mb-3 mt-2 " onClick={toggleMenu}>
          <p className='text-[30px]'><i class="fa-solid fa-bars"></i></p>
        </div>


        <div className="left hidden lg:block py-3 mt-4 mr-12">
          <button className='bg-[#FE5D37] text-white font-bold rounded-full px-4 py-2'>Join Us <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div >

      <div className="Nav lg:hidden" onClick={toggleMenu} ref={menuRef}>
        <div className=" flex flex-col space-y-7 bg-white font-semibold cursor-pointer pl-5 py-10 ">
          <Link to="/Home"> <p className='hover:text-[#FE5D37]'>Home</p></Link>
          <Link to="/AboutUs"><p className='hover:text-[#FE5D37]'>About Us</p></Link>
          <Link to="/Classes"><p className='hover:text-[#FE5D37]'>Classes</p></Link>
          <Link><p className='hover:text-[#FE5D37]'>Pages</p></Link>
          <Link to="/ContactUs"><p className='hover:text-[#FE5D37]'>Contact Us</p></Link>
        </div>
      </div>
    </>
  )
}
export default Header