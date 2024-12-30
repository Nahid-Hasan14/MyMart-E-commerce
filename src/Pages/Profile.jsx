import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {

    const { address } = useSelector((state) => state.addressList);
  console.log(address);

  return (
    <div>
       <div className="col-lg-12 profileAddressBook">
            <div className=" row address-title">
              <div className="col-lg-8">
                <h3>Address Book</h3>
              </div>
              <div className="col-lg-4 text-right profile-edit-btn">
                {address && address.length > 0 ? (
                  <Link
                    to={"/update-address?redirect=profile"}
                    state={{ address }}
                  >
                    <button className="btn btn-info text-right">Edit</button>
                  </Link>
                ) : (
                  <Link to={"/address"} state={{ address }}>
                    <button className="btn btn-info text-right">
                      Add Your Shipping Address
                    </button>
                  </Link>
                )}
              </div>
            </div>
            {address && address.length > 0 ? (
              address.map((addressList) => {
                const {
                  id,
                  fullName,
                  phoneNumber,
                  email,
                  division,
                  district,
                  fullAddress,
                  thana,
                  upozila,
                } = addressList;
                return (
                  <div key={id}>
                    <div className="address-book">
                      <p>
                        <b>Full Name:</b> {fullName}
                      </p>
                      <p>
                        <b>Mobile Number:</b> {phoneNumber}
                      </p>
                      <p>
                        <b>Email:</b> {email}
                      </p>
                      <p>
                        <b>Division:</b> {division}
                      </p>
                      <p>
                        <b>District:</b> {district}
                      </p>
                      <p>
                        <b>UpoZila:</b> {upozila}
                      </p>
                      <p>
                        <b>Thana:</b> {thana}
                      </p>
                      <p>
                        <b>Home:</b> {fullAddress}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Please Add Your Shipping Address and information</p>
            )}
          </div>
    </div>
  )
}

export default Profile
