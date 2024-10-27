import { BrowserRouter, Routes, Route } from'react-router-dom'
import {routes, authRoutes} from './routes'
import AdminLayout from './elements/AdminLayout'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index)=>(
            <Route path={route.path} element={route.component} key={index} />
          ))}
          <Route element={<AdminLayout />}>
            {authRoutes.map((route, index)=>(
              <Route path={route.path} element={route.component} key={index} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
