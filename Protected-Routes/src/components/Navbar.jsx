import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin/profile">Profile</Link>
      <Link to="/dashboard">DashBoard</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/myorders">MyOrders</Link>
      <Link to="myblogs">MyBlogs</Link>
    </nav>
    </>
  )
}

export default Navbar