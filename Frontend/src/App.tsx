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
import BloggerProfile from './pages/BloggerProfile'
import Yourblog from './pages/Yourblog'

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
      <Route path='/blog/:id' element = {<Blog/>}/>
      <Route path='/signin' element={<SigninForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/yourblogs' element={<Yourblogs/>}/>
      <Route path='/writeblog' element={<Writeblog/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/:blogger' element={<BloggerProfile/>}/>
      <Route path='/yourblog/:id' element={<Yourblog/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
