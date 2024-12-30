import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearAllCarts, decrementCart, removeCart, setCartsFromLocalStorage } from "../features/CartSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
// import { useEffect } from "react";

export default function CartPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {carts} = useSelector((state)=> state.cartItemsList)
  // console.log(carts)

  useEffect(()=>{
    const getCartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    console.log("Cart items from localStorage:", getCartItems);
    dispatch(setCartsFromLocalStorage(getCartItems))
  }, [dispatch])

  useEffect(()=>{
    localStorage.setItem("cartData", JSON.stringify(carts))
  }, [carts])

  const handleEncrement = (cart)=> {
      dispatch(addToCart(cart)) 
  }

  const handleDecrement = (cart)=> {
    dispatch(decrementCart(cart))
  }

  const handleRemove = (id) =>{
    dispatch(removeCart(id))
    toast.success(`Remove Item Successfuly`, {autoClose: 1000})
    if(carts.length === 1){
      navigate("/")
      toast.info('Cart is now empty, redirecting to home page', { autoClose: 1000 });
    }
  }

  const handleClearCarts =(e)=> {
     dispatch(clearAllCarts(e))
     toast.info("Clear all carts", {autoClose: 1000})
     navigate('/')
  }

  const totalPrice = carts.reduce((total, product)=> {
    return total + product.price * product.quantity
  }, 0)

 

  return (
    <div>
      <div className="privacy">
        <div className="container">
          {/* tittle heading */}
          <h3 className="tittle-w3l">
            Your Cart Products
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          {/* //tittle heading */}
          <div className="checkout-right">
            <h4>
              Your shopping cart contains: 
              <span>{ carts.length } Products</span>
            </h4>
            <div className="table-responsive">
              <table className="timetable_sub">
                <thead>
                  <tr>
                    <th>SL No.</th>
                    <th>Product</th>
                    <th>Quality</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                {carts.length ? carts.map((cart, index)=> {
                  const {id, title, price, images, quantity} = cart
                  return (
                    <tr key={id} className="rem1">
                    <td className="invert">{index + 1}</td>
                    <td className="invert-image">
                      <a className="cart-img">
                        <img
                          src={images}
                          alt=" "
                          className="img-responsive" 
                        />
                      </a>
                    </td>
                    <td className="invert">
                      <div className="quantity">
                        <div className="quantity-select">
                          <div onClick={()=> cart.quantity <= 1 ? handleRemove(id) : handleDecrement(cart)} className="entry value-minus">&nbsp;</div>
                          <div className="entry value">
                            <span>{quantity}</span>
                          </div>
                          <div onClick={()=> handleEncrement(cart)} className="entry value-plus active">&nbsp;</div>
                        </div>
                      </div>
                    </td>
                    <td className="invert">{title}</td>
                    <td className="invert">${price} * {quantity} = {(price*quantity).toFixed(2)}</td>
                    <td className="invert">
                      <div className="rem">
                        <div onClick={()=> handleRemove(id)} className="close1"> </div>
                      </div>
                    </td>
                  </tr>
                  )
                })  : (<p> This time no products Yet</p>)
                }
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-6"><button onClick={()=>handleClearCarts()} className="btn btn-info btn-sm" disabled={carts.length ===0}>Clear All Carts</button></div>
              <div className="col-lg-6 text-right"><p style={{color: "black"}}><b>Total Price: {totalPrice.toFixed(2)}</b></p></div>
          </div>
          <div className="checkout-left">
                <Link to= {"/checkout-page"}>
                  <button className="btn btn-info btn-lg pull-right" disabled={carts.length=== 0}>Proceed to Order</button>
                </Link>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
