import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import SearchDatabase from "../Components/SearchDatabase";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import { toast } from "react-toastify";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemPerPages = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('')
  const [sortCriteria, setSortCriteria]= useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setError(null);
  
      let url;
      if (searchQuery) {
        url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${itemPerPages}&skip=${(currentPage - 1) * itemPerPages}`;
      } else {
        url = `https://dummyjson.com/products?limit=${itemPerPages}&skip=${(currentPage - 1) * itemPerPages}`;
      }
      if(sortCriteria){
        const splitSortCriteria = sortCriteria.split('-')

        url += `&sortBy=${splitSortCriteria[0]}&order=${splitSortCriteria[1]}`
      }
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data.products);
          setTotalPages(Math.ceil(data.total / itemPerPages));
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };
  
    fetchData();
  }, [currentPage, searchQuery, sortCriteria]);
  
  // Search single page products
  // const searchProducts = products ? products.filter((product)=> product.title.toLowerCase().includes(searchQuery.toLowerCase())) : []

  const handleSearchChange=(event) => {
    setSearchQuery(event.target.value)
    setCurrentPage(1)
  }

  const handleSortChange= (event)=> {
    setSortCriteria(event.target.value)
  }

  // Add To Cart Function
  const handleCart =(product) => {
      toast.dismiss()
      dispatch(addToCart(product))
      toast.success('Add to cart successfuly', {autoClose: 1000})
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
          <div className="agileinfo-ads-display col-md-12">
            <div className="wrapper">
              {/* first section (nuts) */}
              <div className="product-sec1">
                <SearchDatabase searchQuery={searchQuery} onHandleSearchChange={handleSearchChange} sortCriteria= {sortCriteria} onHandleSortChange={handleSortChange}/>

                 {loading && <p>Data Loading. Please Wait (Thanks)</p>}
                  {error && <p>Error: {error}</p>}
                 {!loading && !error && (
                  <> 
                {products && products.length > 0 && products.map((product) => {
                  const { id, title, price, images, discountPercentage } =
                    product;
                    
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
                                {title && title.substring(0, 15)}...
                              </a>
                            </h4>
                            <div className="info-product-price">
                              <span className="item_price">${price}</span>
                              <del>${discountPercentage}</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                              <buttton onClick={()=> handleCart(product)} className="btn btn-info ">
                                Add to Cart
                              </buttton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                </>
                )}
                <div className="clearfix" />
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onHandleCurrentPage={setCurrentPage}
              />
            </div>
          </div>
          {/* //product right */}
        </div>
      </div>
    </div>
  );
}
