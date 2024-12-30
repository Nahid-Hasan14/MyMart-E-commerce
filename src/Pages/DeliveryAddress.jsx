import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../features/AddressSlice";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
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

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirectTo = new URLSearchParams(location.search).get("redirect")

  const handleChange = (e) => {
    setFormData((formData)=> ({...formData, [e.target.name]: e.target.value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(addAddress(formData))
    console.log("Form data submitted:", formData);
    if(redirectTo === "checkout"){
      navigate("/checkout-page")
    } else {
      navigate("/dashboard")
    }
    // setFormData({
    //     fullName: "",
    //     email: "",
    //     phoneNumber: "",
    //     division: "",
    //     district: "",
    //     upozila: "",
    //     thana: "",
    //     fullAddress: "",
    // })
  };

  return (
    <>
      <div className="container address">
        <h2 className="text-center">Delivery Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
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
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="division">Division *</label>
              <select
                className="form-control"
                name="division"
                value={formData.division}
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
                value={formData.district}
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
                value={formData.upozila}
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
                value={formData.thana}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 col-sm-12 form-group">
              <label htmlFor="fullAddress">Write Your Full Address *</label>
              <input
                type="text"
                className="form-control"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Save Address
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DeliveryAddressForm;
