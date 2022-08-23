import {useRoutes} from 'react-router-dom'
import AdminHome from './../Admin_module/pages/AdminHome';

const AdminRoutes = () => {
  const myRoutes = useRoutes([
    {
        path:"/admin",
        element:<AdminHome/>
    }
  ])
  return myRoutes
}

export default AdminRoutes