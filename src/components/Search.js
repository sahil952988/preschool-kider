import React, { useState } from "react";
import '../style/Search.css';

import data from "../Assets/ClassesData";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="main ">
        <div className="">
          <p data-aos="fade-up" className='school_Facilites text-center md:text-[40px]  text-[28px] font-semibold'>Find Your Teacher</p>
        </div>
      </div>

      <div className="templateContainer ">
        <div className="searchInput_Container pb-10">
          <input id="searchInput" type="text" placeholder="Search Teachers..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>


        <div className="template_Container 2xl:mx-[105px] bg-white lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 px-10  gap-5 md:space-y-0 space-y-5">
          {
            data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.teacherName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img className="pt-3" src={val.imgUrl} alt="" />
                    <div className=" py-5">
                      <h1>Name: {val.teacherName}</h1>
                      <h3>Course: {val.subject}</h3>
                      <p className="price">Fee :{val.Fee}</p>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Search;