import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import data from './components/index'

function App() {
  return (
    <>
      <Router>
      <data.Navbar/>
        <Routes>
          <Route path='/' element={<data.Home/>}/>
          <Route path='/admin/profile' element={<data.Profile/>}/>
          <Route path='/dashboard' element={<data.Dashboard/>}/>
          <Route path='/login' element={<data.Login/>}/>
          <Route path='/logout' element={<data.Logout/>}/>
          <Route path='/myblogs' element={<data.Myblogs/>}/>
          <Route path='/myorders' element={<data.Myorders/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
