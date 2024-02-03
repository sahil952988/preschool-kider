
import Routing from "../Routes/Routing"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routing />

      <div>
        <Footer />
      </div>


    </>
  )
}
export default Layout