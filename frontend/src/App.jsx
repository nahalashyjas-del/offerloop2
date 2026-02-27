// import './App.css'
import { BrowserRouter, Navigate, Route, Routes, UNSAFE_createBrowserHistory } from 'react-router-dom';
import './index.css'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Navigate to="/login" replace/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;