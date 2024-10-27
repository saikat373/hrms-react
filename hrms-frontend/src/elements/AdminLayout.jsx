import Header  from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer  from "./components/Footer"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AdminLayout;