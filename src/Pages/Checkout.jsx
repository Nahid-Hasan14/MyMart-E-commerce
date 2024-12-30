import { Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Checkout = () => {
  
  const [selectPaymentMethod, setSelectPaymentMethod]= useState("")
  const {address} = useSelector((state)=> state.addressList)
  // console.log(address)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Option", selectPaymentMethod)
    navigate("/thanks-page")
  }

  const {carts} = useSelector((state)=> state.cartItemsList)
  console.log(carts)

  const totalItem = carts.reduce((total, product)=> total + product.quantity, 0)
  // console.log(totalItem)
  const totalPrice = carts.reduce((total, product)=> {
    return total + product.price * product.quantity
  }, 0)

  const totalDiscount = carts.reduce((total, product) => {
    return total + (product.discountPercentage / 100) * product.price;
  }, 0);
  
  const deliveryCharge = 10
  const subtotal = totalPrice - totalDiscount
  const finalTotalPrice = subtotal + deliveryCharge
   
  return (
    <div >
      <div className="container" style={{ marginTop: 30 }}>
        <div className="row checkout">
          <div className="col-lg-9">

            <div className="row">
              <div className="adress">
                <h3>Your Delivery Address (Required)</h3>
                {
                  address && address.length > 0 ? (
                    address.map((adres)=> {
                      const {id, fullAddress
                        , fullName, phoneNumber}= adres
                      return (
                        <div key={id}>
                        <div className="all-address">
                             <p><b>Full Name:</b> {fullName}</p>
                             <p><b>Mobile Number:</b> {phoneNumber}</p>
                             <p><b>Address:</b> {fullAddress}</p>
                        </div>
                        <div>
                          <Link to={"/update-address?redirect=checkout"} state={{address}}>
                             <button className="btn">Change Address</button>
                          </Link>
                        </div>
                        </div>
                      )
                    })
                  ) : (
                    <div>
                       <p>Please Add Your Shipping Address</p>
                       <Link to={"/address?redirect=checkout"}>
                       <button className="btn">Add Address</button>
                     </Link>
                    </div>
                    )
                  
                }
              </div>
            </div>
            
            <div className="row">
               <div className="payment">
                <h3>Payment Method</h3>
                <br />
                <form onSubmit={handleSubmit}>
                <div className="cash-on-delivery">
                    <input onChange={(e)=> setSelectPaymentMethod (e.target.value)} type="radio" name="payment_method" value="1" id="cashOnDelivery" />
                    <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                </div>

                <div className="mobile-banking">
                    <h4>Mobile Banking:</h4>
                    <div className="coustom-bank">
                     <input onChange={(e)=> setSelectPaymentMethod (e.target.value)} type="radio" name="payment_method" value="2" id="bkash" />
                     <label htmlFor="bkash">Bkash</label>
                    </div>

                    <div className="coustom-bank">
                    <input onChange={(e)=> setSelectPaymentMethod (e.target.value)} type="radio" name="payment_method" value="3" id="nagat" />
                    <label htmlFor="nagat">Nagad</label>
                    </div>

                    <div className="coustom-bank">
                    <input onChange={(e)=> setSelectPaymentMethod (e.target.value)} type="radio" name="payment_method" value="4" id="roket" />
                    <label htmlFor="roket">Roket</label>
                    </div>

                    <div className="coustom-bank">
                    <input onChange={(e)=> setSelectPaymentMethod (e.target.value)} type="radio" name="payment_method" value="5" id="celfin"  />
                    <label htmlFor="celfin">Celfin</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-info btn-lg confirm-btn" disabled={address.length===0 ||!selectPaymentMethod}>Confirm Order</button>
                </form>
               </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="checkoutDetails">
                <h3 className="order-heading">Your Orders</h3>
                <div>
                  <div className="row">
                    <div className="col-xs-8">Items:</div>
                    <div className="col-xs-4 text-right">{totalItem}</div>
                  </div>
                  <div className="row">
                    <div className="col-xs-8">Price:</div>
                    <div className="col-xs-4 text-right">${Math.ceil(totalPrice)}</div>
                  </div>
                  <div className="row">
                    <div className="col-xs-8">Delivery Charge:</div>
                    <div className="col-xs-4 text-right">${deliveryCharge}</div>
                  </div>
                  <div className="row">
                    <div className="col-xs-8">Total Discounts:</div>
                    <div className="col-xs-4 text-right">${Math.floor(totalDiscount)}</div>
                  </div>
                  <div className="row">
                    <div className="col-xs-8">Sub-Total:</div>
                    <div className="col-xs-4 text-right">${Math.ceil(subtotal)}</div>
                  </div>
                  <div className="order-heading"></div>
                  <div className="row total-price">
                    <div className="col-xs-8">
                      <strong>Total Price:</strong>
                    </div>
                    <div className="col-xs-4 text-right">
                      <strong>${Math.ceil(finalTotalPrice)}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
