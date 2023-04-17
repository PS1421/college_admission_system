import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import Nopage from './pages/Nopage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/admission' element={<Admission/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

