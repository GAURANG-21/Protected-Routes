import { useDispatch } from "react-redux"

const Logout = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch({type:"logout"})}}>Logout</button>
    </div>
  )
}

export default Logout
