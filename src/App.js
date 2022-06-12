
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar/Navbar';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Shared/Navbar/RequireAuth';


function App() {
  return (
   <div className='px-10'>
     <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/appointment' element={
        <RequireAuth>
           <Appointment></Appointment>
        </RequireAuth>
      }></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
   </div>
  );
}

export default App;
