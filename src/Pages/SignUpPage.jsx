import { useState } from "react"

export default function SignUpPage() {
  const [signupData, setSignupData] = useState({name: "", email: "", password: "", confirmPassword: ""})

  const handleChange =(e)=>{
     setSignupData ((signupData) => ({...signupData, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(signupData)
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
              <h3 className="agileinfo_sign">Sign Up</h3>
              <p>Come join the Grocery Shoppy! Let's set up your Account.</p>
              <form onSubmit={handleSubmit}>
                <div className="styled-input agile-styled-input-top">
                  <input type="text" placeholder="Name" name="name" value={signupData.name} onChange={handleChange} required="" />
                </div>
                <div className="styled-input">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={signupData.email}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="styled-input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={signupData.password}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div className="styled-input">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <input type="submit" defaultValue="Sign Up" />
              </form>
              <p>
                <a href="#">By clicking register, I agree to your terms</a>
              </p>
            </div>
          </div>
        </div>
        {/* //Modal content*/}
      </div>
    </div>
  )
}
