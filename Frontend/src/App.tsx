import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import SigninForm from './pages/SigninForm'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
import Yourblogs from './pages/Yourblogs'
import Writeblog from './pages/Writeblog'
import Profile from './pages/Profile'
import Blog from './pages/Blog'
import { useEffect, useState } from 'react'

function App() {
  const[token,setToken]=useState(false);
  useEffect(() => {
    // Check for token only on component mount
    const t = localStorage.getItem("token");
    if (t) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);
  console.log(token);


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={token? <Dashboard/>:<SigninForm/>}/>
      <Route path='/blog/:id' element = {token? <Blog/>:<SigninForm/>}/>
      <Route path='/signin' element={<SigninForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/yourblogs' element={token? <Yourblogs/>:<SigninForm/>}/>
      <Route path='/writeblog' element={token? <Writeblog/>:<SigninForm/>}/>
      <Route path='/profile' element={token? <Profile/>:<SigninForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
