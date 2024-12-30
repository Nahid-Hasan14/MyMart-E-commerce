import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { fatchProducts } from '../features/ProductsSlice';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from '../features/CartSlice';
import { toast } from 'react-toastify';

export default function SpecialOffer() {
  
  const dispatch = useDispatch()
   const {products, loading, error} = useSelector((state) => state.productsList)
  //  console.log(productsList)

   useEffect(()=> {
    dispatch(fatchProducts('https://dummyjson.com/products'))
   }, [dispatch])

   const allproducts = products.products || [];
  //  console.log(allproducts)

  const handleCart= (product)=> {
    toast.dismiss();
    dispatch(addToCart(product))
    toast.success("Add to cart Successfuly", { autoClose: 1000 })
  }

   // Slick Slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
  };
  
  return (
    <div>
      <div className="featured-section" id="projects">
      <div className="container">
        {/* tittle heading */}
        <h3 className="tittle-w3l">
          Special Offers
          <span className="heading-style">
            <i />
            <i />
            <i />
          </span>
        </h3>
        {/* //tittle heading */}
        <div className="content-bottom-in">
          <ul id="flexiselDemo1">
          <Slider {...settings}>
          {loading && <p>Wait.Data Loading.....</p>}
          {error && <p>Error: Data Loading failed</p>}
            {
              allproducts && allproducts.map((product)=> {
                const {id, title, price, images } = product
                return (
                  <>
                  <div key={id}>
              <div className="w3l-specilamk text-center">
                <div className="speioffer-agile">
                  <a href="single.html">
                    <img src={images} className="img-responsive center-block" alt={title} />
                  </a>
                </div>
                <div className="product-name-w3l">
                  <h4>
                    <a href="single.html">{title.substring(0, 15)}....</a>
                  </h4>
                  <div className="w3l-pricehkj">
                    <h6>{price}</h6>
                    <p>Save $40.00</p>
                  </div>
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <button onClick={()=>handleCart(product)} className='btn btn-info'>Add to Cart</button>
                  </div>
                </div>
              </div>
              </div>
                  </>
                )
              })
            }
            </Slider>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
