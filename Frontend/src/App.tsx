import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import SigninForm from './pages/SigninForm'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SigninForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
