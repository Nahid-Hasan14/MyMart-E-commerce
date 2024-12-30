import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAddress } from "../features/AddressSlice";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateAddress = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const redirectTo = new URLSearchParams(location.search).get("redirect"); //for previce page 
   

    
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    division: "",
    district: "",
    upozila: "",
    thana: "",
    fullAddress: "",
    
  });



  useEffect(() => {
    if (location.state?.address?.[0]) {
      setFormData(location.state.address[0]);
    }
  }, [location]);
  
  
  

  const handleChange = (e) => {
    setFormData((formData)=> ({...formData, [e.target.name]: e.target.value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(updateAddress(formData))
    if (redirectTo === "profile") {
      navigate("/dashboard");
    } if (redirectTo === "checkout") {
      navigate("/checkout-page");
    }
  };

  return (
    <>
      <div className="container address">
        <h2 className="text-center">Update Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="division">Division *</label>
              <select
                className="form-control"
                name="division"
                value={formData.division || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select a Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="state">District *</label>
              <input
                type="text"
                className="form-control"
                id="district"
                name="district"
                value={formData.district || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="upozila">Upojila *</label>
              <input
                type="text"
                className="form-control"
                id="upozila"
                name="upozila"
                value={formData.upozila || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="thana">Thana *</label>
              <input
                type="text"
                className="form-control"
                id="thana"
                name="thana"
                value={formData.thana || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="fullAddress">Write Your Full Address *</label>
              <input
                type="text"
                className="form-control"
                id="fullAddress"
                name="fullAddress"
                value={formData.fullAddress || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update Address
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateAddress;
