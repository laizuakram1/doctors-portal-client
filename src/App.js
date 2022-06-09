
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar/Navbar';


function App() {
  return (
   <div className='px-10'>
     <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
    </Routes>
   </div>
  );
}

export default App;
