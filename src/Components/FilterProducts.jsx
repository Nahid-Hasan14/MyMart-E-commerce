import React from 'react'

export default function FilterProducts({setSearchQuery}) {

    const handleChange =(e)=>{
        setSearchQuery(e.target.value)
    }
  return (
    <div>
      <div className="side-bar col-md-3">
          <div className="search-hotel">
            <h3 className="agileits-sear-head">Search Here..</h3>
            <form action="#" method="post">
              <input
                type="search"
                placeholder="Product name..."
                name="search"
                onChange={handleChange}
                required=""
              />
              <input type="submit" defaultValue=" " />
            </form>
          </div>
          {/* price range */}
          <div className="range">
            <h3 className="agileits-sear-head">Price range</h3>
            <ul className="dropdown-menu6">
              <li>
                <div id="slider-range" />
                <input
                  type="text"
                  id="amount"
                  style={{ border: 0, color: "#ffffff", fontWeight: "normal" }}
                />
              </li>
            </ul>
          </div>
          {/* //price range */}
          {/* food preference */}
          <div className="left-side">
            <h3 className="agileits-sear-head">Food Preference</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Vegetarian</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Non-Vegetarian</span>
              </li>
            </ul>
          </div>
          {/* //food preference */}
          {/* discounts */}
          <div className="left-side">
            <h3 className="agileits-sear-head">Discount</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">5% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">10% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">20% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">30% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">50% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">60% or More</span>
              </li>
            </ul>
          </div>
          {/* //discounts */}
          {/* reviews */}
          <div className="customer-rev left-side">
            <h3 className="agileits-sear-head">Customer Review</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <span>5.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <span>4.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-half-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <span>3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <span>3.0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star-half-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <span>2.5</span>
                </a>
              </li>
            </ul>
          </div>
          {/* //reviews */}
          {/* deals */}
          <div className="deal-leftmk left-side">
            <h3 className="agileits-sear-head">Special Deals</h3>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/d2.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Lay's Potato Chips</h3>
                <a href="single.html">$18.00</a>
              </div>
              <div className="clearfix" />
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/d1.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Bingo Mad Angles</h3>
                <a href="single.html">$9.00</a>
              </div>
              <div className="clearfix" />
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/d4.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Tata Salt</h3>
                <a href="single.html">$15.00</a>
              </div>
              <div className="clearfix" />
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/d5.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Gujarat Dry Fruit</h3>
                <a href="single.html">$525.00</a>
              </div>
              <div className="clearfix" />
            </div>
            <div className="special-sec1">
              <div className="col-xs-4 img-deals">
                <img src="images/d3.jpg" alt="" />
              </div>
              <div className="col-xs-8 img-deal1">
                <h3>Cadbury Dairy Milk</h3>
                <a href="single.html">$149.00</a>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          {/* //deals */}
        </div>
    </div>
  )
}
