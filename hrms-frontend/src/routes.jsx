import ForgotPassword  from "./elements/ForgotPassword";
import Login from "./elements/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EmployeeDashboard  from "./pages/employee/EmployeeDashboard";

const routes = [
    {
        path:"/login",
        component: <Login />
    },
    {
        path:"/forgot-password",
        component: <ForgotPassword />
    },
    
]

const authRoutes = [
    {
        path:"/admin",
        component: <AdminDashboard />
    },
    {
        path:"dashboard",
        component:<EmployeeDashboard />
    }
]

export {routes, authRoutes};