import CommonSection from "../components/CommonSection/CommonSection"
import classData from "../Assets/ClassesData"
import MakeAppointment from "../components/UI/MakeAppointment"

import TestimonialSlider from "../components/UI/TestimonialSlider"
import { useState } from "react"
import { SearchResultsList } from "../components/SearchTeachers/SearchResultsList"
import SearchBar from "../components/SearchTeachers/SearchBar"



const Classes = () => {
  const [results, setResults] = useState([]);







  return (
    <>
      <CommonSection title=' Classes' />


      <div className="main 2xl:mx-[105px] bg-white">
        <div className="pt-20 pb-10">
          <p className='school_Facilites text-center md:text-[40px]  text-[28px] font-semibold'>School Classes</p>

          <p className='text-center xl:ml-[360px] ml-7 xl:mr-[350px] mr-7 mt-5 text-[#74787C]'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
      </div>



      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </div>









      <MakeAppointment />


      <TestimonialSlider />
    </>
  )
}
export default Classes