
import { useEffect, useState } from 'react'
// import FilterProducts from './FilterProducts'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import { toast } from 'react-toastify';

export default function TopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch()


  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true)
      setError(false)

      try{
        const res = await axios.get('https://dummyjson.com/products')
        setProducts(res.data.products)

      } catch (err){
        setError(err.message)
      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [])
  
 
  // console.log(products)
  ///search product
  // const searchProduct = products ? products.filter((product)=> product.name.toLowerCase().includes(searchQuery.toLowerCase())) : []


  const ProductsCategory= (category)=>{
    return products.filter((product)=> product.category ===category)
  }

  // Add To Cart Function
  const handleCart =(product)=> {
    toast.dismiss();
    dispatch(addToCart(product))
    toast.success("Add to cart Successfuly", { autoClose: 1000 })
  }
  return (
    <div>
      <div className="ads-grid">
      <div className="container">
        {/* tittle heading */}
        <h3 className="tittle-w3l">
          Our Top Products
          <span className="heading-style">
            <i />
            <i />
            <i />
          </span>
        </h3>
        {/* //tittle heading */}
        {/* product right */}
        <div className="agileinfo-ads-display col-md-12">
          <div className="wrapper">
            {/* first section (nuts) */}
            <div className="product-sec1">
              <h3 className="heading-tittle">Beauty</h3>
              {loading && <p>Data Loading....</p>}
              {error && <p>Data Loading Error</p>}
              
                {
                  ProductsCategory("beauty").slice(0, 4).map((product)=>{
                    const {id, title, price, discountPercentage, images}= product
                    return (
                      <div key={id} className="col-md-3 product-men">
                      <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={images} alt={title} />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to={`/product-details/${id}`} state={product} className="link-product-add-cart">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <a href="single.html">{title.substring(0, 15)}....</a>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">${price}</span>
                      <del>${discountPercentage}</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                      <button onClick={()=>handleCart(product)} className='btn btn-info'>Add to cart</button>
                    </div>
                  </div>
                </div>
                </div>
                    )
                  })
                }
              
              <div className="clearfix" />
            </div>
            {/* //first section (nuts) */}
            {/* second section (nuts special) */}
            <div className="product-sec1 product-sec2">
              <div className="col-xs-7 effect-bg">
                <h3 className="">Pure Energy</h3>
                <h6>Enjoy our all healthy Products</h6>
                <p>Get Extra 10% Off</p>
              </div>
              <h3 className="w3l-nut-middle">Nuts &amp; Dry Fruits</h3>
              <div className="col-xs-5 bg-right-nut">
                <img src="images/nut1.png" alt="" />
              </div>
              <div className="clearfix" />
            </div>
            {/* //second section (nuts special) */}
            {/* third section (oils) */}
            <div className="product-sec1">
              <h3 className="heading-tittle">Groceries</h3>
              {
                ProductsCategory('groceries').slice(0, 12).map((product)=> {
                  const {id, title, price, discountPercentage, images}= product
                  return (
                    <div key={id} className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={images} alt={title} />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to={`/product-details/${id}`} state={product} className="link-product-add-cart">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <a href="single.html">{title.substring(0, 15)}....</a>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">${price}</span>
                      <del>${discountPercentage}</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                      <button onClick={()=> handleCart(product)} className='btn btn-info'>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
                  )
                })
              }
              <div className="clearfix" />
            </div>
            {/* //third section (oils) */}
            {/* fourth section (noodles) */}
            <div className="product-sec1">
              <h3 className="heading-tittle">Furniture</h3>
              {
                ProductsCategory("furniture").slice(0, 4).map((product)=>{
                  const {id, title, price, discountPercentage, images}= product
                  return (
                    <div key={id} className="col-md-3 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                  <div className="men-thumb-item">
                    <img src={images} alt={title} />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <Link to={`/product-details/${id}`} state={product} className="link-product-add-cart">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item-info-product ">
                    <h4>
                      <a href="single.html">{title.substring(0, 15)}....</a>
                    </h4>
                    <div className="info-product-price">
                      <span className="item_price">${price}</span>
                      <del>${discountPercentage}</del>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <button onClick={()=> handleCart(product)} className='btn btn-info'>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
                  )
                })
              }
              <div className="clearfix" />
            </div>
            {/* //fourth section (noodles) */}
          </div>
        </div>
        {/* //product right */}
      </div>
    </div>
    </div>
  )
}

