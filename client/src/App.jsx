import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Editpage from "./pages/editpage/editpage"
import { useContext } from "react"
import { AuthContext } from "./contextApi/AuthContext"
import AddDns from "./pages/addDnsPage/AddDns"
import ProfilePage from "./pages/profilepage/ProfilePage"


function App() {
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <Routes>
        <Route path="/" element={!currentUser ? <Navigate to={"/login"} /> : <HomePage />} />
        <Route path="/adddns" element={!currentUser ? <Navigate to={"/login"} /> : <AddDns />} />
        <Route path="/editpage/:id" element={!currentUser ? <Navigate to={"/login"} /> : <Editpage />} />
        <Route path="/profile/:id" element={!currentUser ? <Navigate to={"/login"} /> : <ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
