import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"

export default function Page() {
  return (
    <div>
        <Navbar />    
        <Outlet />
        <Footer />
    </div>
  )
}
