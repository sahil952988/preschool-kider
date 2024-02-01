import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Classes from "../pages/Classes"
import ContactUs from "../pages/ContactUs"

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Classes' element={<Classes />} />
        <Route path='ContactUs' element={<ContactUs />} />
      </Routes>
    </>
  )
}
export default Routing