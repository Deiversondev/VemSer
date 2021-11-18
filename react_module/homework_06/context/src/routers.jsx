import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';

 import Login from './pages/Login'
 import Users from './pages/Users'

 function Routers() {
   return (
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
      </Routes>
     </BrowserRouter>
   )
 }

 export default Routers;