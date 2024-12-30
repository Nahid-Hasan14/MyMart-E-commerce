
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllCarts } from "../../features/CartSlice";
import NavSearch from "./NavSearch";
import { toast } from "react-toastify";

export default function NavbarTop({isAuthenticated, onLogout}) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { carts } = useSelector((state) => state.cartItemsList);
  // console.log(carts)

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(clearAllCarts())   // for addToCart data remove
    alert("Log Out Seccessfully");
    onLogout()
    navigate("/signin-page");
    
  };

  const handleCart= (carts)=> {
    if(carts.length ===0){
      toast.error("Carts page is emty. Please Add products")
      return ;
    } 
      navigate("/cart-page")
  }
  return (
    <div>
      {/* top-header */}
      <div className="header-most-top">
        <p>Grocery Offer Zone Top Deals &amp; Discounts</p>
      </div>
      {/* //top-header */}
      {/* header-bot*/}
      <div className="header-bot">
        <div className="header-bot_inner_wthreeinfo_header_mid">
          {/* header-bot*/}
          <div className="col-md-4 logo_agile">
            <h1>
              <Link to={"/"}>
                <span>M</span>y
                <span>M</span>art
              </Link>
            </h1>
          </div>
          {/* header-bot */}
          <div className="col-md-8 header">
            {/* header lists */}
            <ul>
              <li>
                <a
                  className="play-icon popup-with-zoom-anim"
                  href="#small-dialog1"
                >
                  <span className="fa fa-map-marker" aria-hidden="true" /> Shop
                  Locator
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#myModal1">
                  <span className="fa fa-truck" aria-hidden="true" />
                  Track Order
                </a>
              </li>
              <li>
                <span className="fa fa-phone" aria-hidden="true" /> 001 234 5678
              </li>
              {isAuthenticated ? (
                <li>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle text-light"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Nahid Hasan <span className="caret" />
                    </a>
                    <div className="dropdown-menu coustom-dropdown" style={{ minWidth: "200px" }}>
                      <table className="table table-borderless coustom-table" style={{ borderSpacing: "0 !important", borderCollapse: "collapse" }}>
                        
                        <tr>
                         <td className="Profile-style"><Link to={"/dashboard"} className="dropdown-item custom-item">Dashboard</Link></td>
                        </tr>
                        {/* <tr>
                         <td  className="Profile-style"><Link to={"/order-page"} className="dropdown-item custom-item"> Your Order</Link></td>
                        </tr> */}
                        {/* <tr>
                         <td  style={{ padding: "0px" }}><hr className="dropdown-divider"/></td>
                        </tr> */}
                        <tr >
                         <td className="Profile-style"><a onClick={handleSignOut} className="dropdown-item custom-item">Log Out </a></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </li>
              ) : (
                <>
                <li>
                  <Link to={"/signin-page"}>
                    <span className="fa fa-unlock-alt" /> Sign In
                  </Link>
                </li>
                <li>
                <Link to={"/signUp-page"}  data-toggle="modal" data-target="#myModal2">
                  <span className="fa fa-pencil-square-o" aria-hidden="true" />{" "}
                  Sign Up{" "}
                </Link>
              </li>
              </>
              )}
              
            </ul>
            {/* //header lists */}
            {/* search */}
            <NavSearch />
            {/* //search */}
            {/* cart details */}
            <div className="top_nav_right">
              <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="display" defaultValue={1} />
                  
                    <button
                      onClick={()=> handleCart(carts)}
                      className="w3view-cart"
                      type="button"
                      name="submit"
                      value=""
                    >
                      <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                      <span>{carts.length}</span>
                    </button>
                </form>
              </div>
            </div>
            {/* //cart details */}
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* shop locator (popup) */}
    </div>
  );
}
