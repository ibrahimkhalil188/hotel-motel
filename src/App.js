import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import LogIn from './Pages/Home/LogIn/LogIn';
import Register from './Pages/Home/Register/Register';
import Rooms from './Pages/Home/Rooms/Rooms';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
      </Routes>
    </div>
  );
}

export default App;
