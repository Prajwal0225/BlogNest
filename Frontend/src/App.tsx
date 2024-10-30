import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import SigninForm from './pages/SigninForm'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
import Yourblogs from './pages/Yourblogs'
import Writeblog from './pages/Writeblog'
import Profile from './pages/Profile'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SigninForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/yourblogs' element={<Yourblogs/>}/>
      <Route path='/writeblog' element={<Writeblog/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
