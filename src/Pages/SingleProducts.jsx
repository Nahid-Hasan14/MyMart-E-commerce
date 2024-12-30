import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../features/CartSlice";
import { toast } from "react-toastify";

export default function SingleProducts() {
  const { state } = useLocation();
  // console.log(state);

  const dispatch = useDispatch();

  const handleCart = (state)=> {
    dispatch(addToCart(state))
    toast.success("Add to cart Successfuly", {autoClose: 1000})
  }

  return (
    <div>
      <div className="banner-bootom-w3-agileits">
        <div className="container">
          {/* tittle heading */}
          <h3 className="tittle-w3l">
            Single Page
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          {/* //tittle heading */}
          {state ? (
            <article className="row">
              <div className="col-md-5 single-right-left ">
                <div className="grid">
                  <img
                    src={state.images}
                    className="img-responsive"
                    alt={state.title}
                  />
                </div>
              </div>
              <div className="col-md-7 single-right-left simpleCart_shelfItem">
                <h3>{state.title}</h3>
                <div className="rating1">
                  <span className="starRating">
                    <input
                      id="rating5"
                      type="radio"
                      name="rating"
                      defaultValue={5}
                    />
                    <label htmlFor="rating5">5</label>
                    <input
                      id="rating4"
                      type="radio"
                      name="rating"
                      defaultValue={4}
                    />
                    <label htmlFor="rating4">4</label>
                    <input
                      id="rating3"
                      type="radio"
                      name="rating"
                      defaultValue={3}
                      defaultChecked=""
                    />
                    <label htmlFor="rating3">3</label>
                    <input
                      id="rating2"
                      type="radio"
                      name="rating"
                      defaultValue={2}
                    />
                    <label htmlFor="rating2">2</label>
                    <input
                      id="rating1"
                      type="radio"
                      name="rating"
                      defaultValue={1}
                    />
                    <label htmlFor="rating1">1</label>
                  </span>
                </div>
                <p>
                  <span className="item_price">${state.price}</span>
                  <del>$1300.00</del>
                  <label>Free delivery</label>
                </p>
                <div className="single-infoagile">
                  <ul>
                    <li>Cash on Delivery Eligible.</li>
                    <li>Shipping Speed to Delivery.</li>
                    <li>
                      Sold and fulfilled by Supple Tek (3.6 out of 5 | 8
                      ratings).
                    </li>
                    <li>
                      1 offer from
                      <span className="item_price">$950.00</span>
                    </li>
                  </ul>
                </div>
                <div className="product-single-w3l">
                  <p>
                    <i className="fa fa-hand-o-right" aria-hidden="true" />
                    This is a<label>Vegetarian</label> product.
                  </p>
                  <ul>
                    <li>Best for Biryani and Pulao.</li>
                    <li>
                      After cooking, Zeeba Basmati rice grains attain an extra
                      ordinary length of upto 2.4 cm/~1 inch.
                    </li>
                    <li>
                      Zeeba Basmati rice adheres to the highest food afety
                      standards as your health is paramount to us.
                    </li>
                    <li>
                      Contains only the best and purest grade of basmati rice
                      grain of Export quality.
                    </li>
                  </ul>
                  <p>
                    <i className="fa fa-refresh" aria-hidden="true" />
                    All food products are
                    <label>non-returnable.</label>
                  </p>
                </div>
                <div className="occasion-cart">
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <buttoon onClick={()=> handleCart(state)} className= "btn btn-success btn-lg">Add to Cart</buttoon>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div>No Products Found</div>
          )}
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}
