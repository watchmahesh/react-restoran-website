import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const Layout = ({children}) => {
  return (

      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
      <Header/>
      </div>
        <div>{children}</div>
      <Footer />
      </div>

  )
}

export default Layout;