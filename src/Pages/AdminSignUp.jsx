

const AdminSignUp = () => {
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
              <h3 className="agileinfo_sign">Admin Sign Up</h3>
              <form>
                <div className="styled-input agile-styled-input-top">
                  <input type="text" placeholder="Name" name="name" required="" />
                </div>
                <div className="styled-input">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    required=""
                  />
                </div>
                <div className="styled-input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required=""
                  />
                </div>
                <div className="styled-input">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
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

export default AdminSignUp
