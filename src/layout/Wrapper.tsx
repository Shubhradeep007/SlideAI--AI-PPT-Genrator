import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


const Wrapper = () => {
  return (
    <>
        <Navbar />
        <div className="pt-24">
            <Outlet />
            <Footer />
        </div>
    </>
  )
}

export default Wrapper