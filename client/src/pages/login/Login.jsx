import { useContext, useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contextApi/AuthContext"
import image from "../../assects/dns.png"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ username, password })
    } catch (error) {
      return (error.message)
    }

  }

  return (
    <div className='login'>
      <div className="login-container">
        <div className="">
          <img src={image} alt="" />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <h2 style={{ fontWeight: "600", textAlign: "center" }}>Login</h2>
          <div className="form-inputs">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="username" required onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="form-inputs">
            <label htmlFor="">password</label>
            <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p>Don't have Account! <Link to={"/register"} style={{ color: "blue" }}>Sign Up</Link></p>
          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login