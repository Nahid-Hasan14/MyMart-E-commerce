import axios from "axios";
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignInPage({onLogin}) {
    const [email, setEmail] = useState("john@mail.com")
    const [password, setPassword] = useState('changeme')
  
    const navigate = useNavigate()
    const location = useLocation()
  
    const from = location.state?.from?.pathname || '/';
  
    const handleLoginSubmit =(e)=> {
      e.preventDefault();
      const loginData = {
        email,
        password
      }
  
      axios.post('https://api.escuelajs.co/api/v1/auth/login', loginData)
      .then ((res)=> {
        localStorage.setItem("token", JSON.stringify(res.data.access_token))
        console.log("Login Success", res)
  
        onLogin()
        navigate(from, {replace: true})
      })
       .catch((err)=>{
              console.log("Res Failed", err)
          })
    }
  return (
    <div>
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-body modal-body-sub_agile">
            <div className="main-mailposi">
              <span className="fa fa-envelope-o" aria-hidden="true" />
            </div>
            <div className="modal_body_left modal_body_left1">
              <h3 className="agileinfo_sign">Log In</h3>
              <form onSubmit={handleLoginSubmit}>
                <div className="styled-input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="styled-input">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <input type="submit" defaultValue="Sign Up" />
              </form>
              <p>
                <p>If you are not Register. Please Registetion. </p> <Link to={"/signUp-page"} href="#">Register</Link>
              </p>
            </div>
          </div>
        </div>
        {/* //Modal content*/}
      </div>
    </div>
  )
}
