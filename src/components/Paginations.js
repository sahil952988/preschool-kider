import "../style/Pagination.css";
import React, { useState } from "react";
import JsonData from "../Assets/ClassesData";
import ReactPaginate from "react-paginate";

function Paginations() {
  const [users, setUsers] = useState(JsonData.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="hero">
          <div className='All_item  bg-white'>

            <div className="flex justify-center">
              <div className="IMAGE w-[273px] bg-[#FFF5F3]  h-[273px] rounded-full ">
                <img src={user.subjImg} alt="" className='rounded-full pl-4 pt-3 w-[259px] h-[259px]' />
              </div>
            </div>

            <div className="info bg-[#FFF5F3] pt-20 mt-[-48px] rounded-[8px]">

              <h1 className='subjects text-[28px] text-center'>{user.subject}</h1>

              <div className="flex justify-between px-5 pt-5">
                <div className="user flex  space-x-3 md:mt-0 mt-5 md:mb-0 pb-5">

                  <div className="detials  flex space-x-4">
                    <img className="w-[45px] h-[45px] rounded-full" src={user.imgUrl} alt="" />
                    <div className="user_info">
                      <p className='text-[#FE5D37] font-bold'>{user.teacherName}</p>
                      <p>{user.profession}</p>
                    </div>
                  </div>
                </div>


                <button className='bg-[#FE5D37] text-white rounded-[50rem] px-5 h-10'>{user.Fee}</button>
              </div>

              <div className="Lower_info flex justify-between px-5 pb-3">

                <h3 className='border-t-[3px] border-t-[#FE5D37] w-[110px]'>
                  <p className='font-bold text-[#FE5D37]'>Age:</p>
                  <span className='text-[14px] text-[#74787C]'>{user.Age}</span></h3>

                <h3 className='border-t-[3px] border-t-[#198754] w-[110px] '>
                  <p className='font-bold text-[#198754]'>Time:</p><span className='text-[14px] text-[#74787C]'>{user.Time}</span></h3>

                <h3 className='border-t-[3px] border-t-[#ffc107] w-[110px]'>
                  <p className='font-bold text-[#ffc107]'>Capacity:</p><span className='text-[14px] text-[#74787C]'>{user.Capacity}</span></h3>
              </div>


            </div>

          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App 2xl:mx-[105px] bg-white lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 px-10  gap-5 md:space-y-0 space-y-5 ">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Paginations;