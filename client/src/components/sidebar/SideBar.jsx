import "./SideBar.css"
import { MdOutlineDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthContext";


const SideBar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }

  return (
    <div className='sidebar-container'>
      <div className="sidebar-top">
        <h2>Dashboard</h2>
        <div className="sidebar-list">

          <Link to={"/"}>
            <ul>
              <MdOutlineDashboard />
              <li>Home page</li>
            </ul>
          </Link>
          <Link to={"/addtask"}>
            <ul>
              <BiTask />
              <li>Add Tast</li>
            </ul>
          </Link>

          {/* <ul>
            <IoPersonOutline />
            <li>Profile</li>
          </ul> */}
        </div>
      </div>
      <div className="sidebar-bottom">
        <hr />
        <div className="sidebar-list">
          {/* <ul>
            <IoSettingsOutline />
            <li>Settings</li>
          </ul> */}
          {currentUser ?
            <ul>
              <CiLogout />
              <li onClick={handleLogout}>LogOut</li>
            </ul>
            :
            <Link to={"/login"}>
              <ul>
                <li>Login</li>
              </ul>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar