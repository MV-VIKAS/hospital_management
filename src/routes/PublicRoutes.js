import {useRoutes} from 'react-router-dom'
import Landing from '../pages/landing/Landing'

const PublicRoutes = () => {
  const myRoutes = useRoutes([
    {
        path:"/",
        element:<Landing/>
    },
  ])
  return myRoutes
}

export default PublicRoutes