import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { addToCart } from "../features/CartSlice"
import { toast } from "react-toastify"

const SearchCategoryProducts = () => {
    const [products, setProducts]= useState("")
    const [isLoading, setIsLoading]= useState(false)

    const {category} = useParams()
    const dispatch = useDispatch()

    useEffect(()=> {
        setIsLoading(true)
        const categoryFetchProduct = async () => {

          try {
          const responce = await  axios.get(`https://dummyjson.com/products/category/${category}`)
            setProducts(responce.data.products)
            setIsLoading(false);
        }
         catch(error) {
            console.log("data Loading Failed", error);
            
        } finally {
          setIsLoading(false)
        }
        
    }
    categoryFetchProduct() 
    }, [category])

    if(isLoading){
      <p>Loading.....</p>
    }


    const handleCart = (product)=> {
         dispatch(addToCart(product))
         toast.success("Cart product successfuly", {autoClose: 1000})
    }
  return (
    <div>
      <div className="ads-grid">
        <div className="container">
          {/* tittle heading */}
          <h3 className="tittle-w3l">
            Our Top {category} Items
            <span className="heading-style">
              <i />
              <i />
              <i />
            </span>
          </h3>
          <div className="agileinfo-ads-display col-md-12">
            <div className="wrapper">
              {/* first section (nuts) */}
              <div className="product-sec1">
              <div className="row">
              {
                       products && products.map((product)=> {
                        const {id, title, images, price, discountPercentage} = product
                        return (
                          <div key={id}>
                      <div className="col-md-3 product-men">
                        <div className="men-pro-item simpleCart_shelfItem custom-shadow">
                          <div className="men-thumb-item">
                            <img
                              className=" img-fluid"
                              src={images}
                              alt="Product Images"
                            />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link
                                  to={`/product-details/${id}`}
                                  state={product}
                                  href="single.html"
                                  className="link-product-add-cart"
                                >
                                  Quick View
                                </Link>
                              </div>
                            </div>
                            <span className="product-new-top">New</span>
                          </div>
                          <div className="item-info-product ">
                            <h4>
                              <a href="single.html">
                               {title}
                              </a>
                            </h4>
                            <div className="info-product-price">
                              <span className="item_price">${price}</span>
                              <del>{discountPercentage} %</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <buttton onClick={()=>handleCart(product)} className="btn btn-info ">
                                Add to Cart
                              </buttton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                        )
                       })
                    }
              </div>
                
                    
                    
                 
                <div className="clearfix" />
              </div>
              
            </div>
          </div>
          {/* //product right */}
        </div>
      </div>
    </div>
  )
}

export default SearchCategoryProducts
