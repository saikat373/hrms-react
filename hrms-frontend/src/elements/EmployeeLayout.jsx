import Header  from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer  from "./components/Footer"
import { Outlet } from "react-router-dom"

const EmployeeLayout = () => {
  return (
    <div>
        <div>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default EmployeeLayout;