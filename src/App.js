import Layout from "./Layout/Layout"
import GoToTop from "./components/GoToTop"
import Helmet from "./components/Helmet/Helmet"

const App = () => {
  return (
    <>
      <Helmet title='Pre School Website Templates'>
        <Layout />
      </Helmet>

      <GoToTop />
    </>
  )
}
export default App