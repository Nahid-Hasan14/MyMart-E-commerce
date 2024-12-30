// import axios from "axios";
// import { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  // const [userData, setUserData] = useState("");
  // const [loading, setLoading] = useState(false);

  

  // const getProfileData = () => {
  //   setLoading(true);
  //   const token = JSON.parse(localStorage.getItem("token"));

  //   const header = {
  //     headers: {
  //       authorization: `bearer ${token}`,
  //     },
  //   };
  //   axios
  //     .get("https://api.escuelajs.co/api/v1/auth/profile", header)
  //     .then((res) => {
  //       setLoading(false);
  //       setUserData(res.data);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getProfileData();
  // }, []);

  return (
    <div>
      <div className="container">
        {/* {loading && <p>Your Data Loading</p>} */}
        <div className="row main-profile">
          <div className="col-lg-3">
            <div className="profile text-center">
              <div className="profile-img text-center">
                <img className="img-fluid" src="./images/nahid.jpg" alt="Nahid Hasan"/>
              </div>
              <h3 className="profile-name">Md Nahid Hasan</h3>
            </div>
            <div className="dashboard-link">
              <h3>Manage My Account</h3>
              <ul>
                <li><Link to={""}>My Profile</Link></li>
                <li><Link to={"order-page"}>My Order</Link></li>
                <li><a>Addrress</a></li>
              </ul>
            </div>
          </div>
            <div className="col-lg-9">
              <Outlet />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
