// import './App.css'
import { BrowserRouter, Navigate, Route, Routes, UNSAFE_createBrowserHistory } from 'react-router-dom';
import './index.css'
import Login from './pages/Login';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import CompanyPage from './pages/Company';
import SignupPage from './pages/Signup';

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Navigate to="/login" replace/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
     <Route path='/profile' element={<ProfilePage/>}/>
     <Route path='/company' element={<CompanyPage/>}/>
     <Route path='/signup' element={<SignupPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;