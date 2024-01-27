import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import data from './components/index'
import { useSelector } from 'react-redux'

function App() {
  // const {isAuthenticated} = useSelector((state)=> { return {root:state.root}})
  const {isAuthenticated} = useSelector((state)=> state.root)
  return (
    <>
      <Router>
      <data.Navbar/>
        <Routes>
          <Route path='/' element={<data.Home/>}/>
          <Route path='/admin/profile' element={isAuthenticated?<data.Profile/>:<data.Login/>}/>
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
