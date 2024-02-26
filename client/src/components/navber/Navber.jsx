import { useContext } from "react";
import "./Navber.css";
import { IoSearch } from "react-icons/io5";
import { AuthContext } from "../../contextApi/AuthContext";

const Navber = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navber'>
      <div className="nav-left">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <IoSearch />
        </div>
      </div>
      <div className="nav-right">
        <span>{currentUser.username}</span>
        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Navber