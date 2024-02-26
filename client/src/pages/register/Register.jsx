import { useState } from "react"
import "./Register.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [conformPass, setConformPass] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== conformPass) return toast.warn("Password doesnot match")
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username, password
      })

      toast.success("Registered Sucessfully")
      if (res.status === 201) {
        navigate("/login")
      }
    } catch (error) {
      toast.warn(error.response.data)
      throw error
    }
  }


  return (
    <div className='login'>
      <div className="add-tast">
        <form action="" onSubmit={handleSubmit}>
          <h2 style={{ fontWeight: "600", textAlign: "center" }}>Sign Up</h2>
          <div className="form-inputs">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="username" required onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-inputs" >
            <label htmlFor="">password</label>
            <input type="password" placeholder="password" min={6} required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-inputs">
            <label htmlFor="">conform password</label>
            <input type="password" placeholder="password"  onChange={(e) => setConformPass(e.target.value)} />
          </div>
          <p>Already have Account! <Link to={"/login"} style={{ color: "blue" }}>Login</Link></p>
          <button type="submit">Register</button>

        </form>
      </div>
    </div>
  )
}

export default Register