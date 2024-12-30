import { NavLink } from "react-router-dom";


export default function Menubar() {
  return (
    <div>
      <div className="ban-top">
      <div className="container">
        <div className="agileits-navi_search">
          <form action="#" method="post">
            <select id="agileinfo-nav_search" name="agileinfo_search" required="">
              <option value="">All Categories</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Household">Household</option>
              <option value="Snacks & Beverages">Snacks &amp; Beverages</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Gift Hampers">Gift Hampers</option>
              <option value="Fruits & Vegetables">Fruits &amp; Vegetables</option>
              <option value="Baby Care">Baby Care</option>
              <option value="Soft Drinks & Juices">
                Soft Drinks &amp; Juices
              </option>
              <option value="Frozen Food">Frozen Food</option>
              <option value="Bread & Bakery">Bread &amp; Bakery</option>
              <option value="Sweets">Sweets</option>
            </select>
          </form>
        </div>
        <div className="top_nav_left">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse menu--shylock"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav menu__list">
                  <li className="">
                    <NavLink to={"/"} className="nav-stylehead">
                      Home
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/about"} className="nav-stylehead">
                        About Us
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle nav-stylehead"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Kitchen
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="agile_inner_drop_nav_info">
                        <div className="col-sm-4 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <li>
                              <a href="product.html">Bakery</a>
                            </li>
                            <li>
                              <a href="product.html">Baking Supplies</a>
                            </li>
                            <li>
                              <a href="product.html">
                                Coffee, Tea &amp; Beverages
                              </a>
                            </li>
                            <li>
                              <a href="product.html">Dried Fruits, Nuts</a>
                            </li>
                            <li>
                              <a href="product.html">Sweets, Chocolate</a>
                            </li>
                            <li>
                              <a href="product.html">Spices &amp; Masalas</a>
                            </li>
                            <li>
                              <a href="product.html">Jams, Honey &amp; Spreads</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <li>
                              <a href="product.html">Pickles</a>
                            </li>
                            <li>
                              <a href="product.html">Pasta &amp; Noodles</a>
                            </li>
                            <li>
                              <a href="product.html">Rice, Flour &amp; Pulses</a>
                            </li>
                            <li>
                              <a href="product.html">
                                Sauces &amp; Cooking Pastes
                              </a>
                            </li>
                            <li>
                              <a href="product.html">Snack Foods</a>
                            </li>
                            <li>
                              <a href="product.html">Oils, Vinegars</a>
                            </li>
                            <li>
                              <a href="product.html">
                                Meat, Poultry &amp; Seafood
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4 multi-gd-img">
                          <img src="images/nav.png" alt="" />
                        </div>
                        <div className="clearfix" />
                      </div>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle nav-stylehead"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Household
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="agile_inner_drop_nav_info">
                        <div className="col-sm-6 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <li>
                              <a href="product2.html">Kitchen &amp; Dining</a>
                            </li>
                            <li>
                              <a href="product2.html">Detergents</a>
                            </li>
                            <li>
                              <a href="product2.html">Utensil Cleaners</a>
                            </li>
                            <li>
                              <a href="product2.html">
                                Floor &amp; Other Cleaners
                              </a>
                            </li>
                            <li>
                              <a href="product2.html">Disposables, Garbage Bag</a>
                            </li>
                            <li>
                              <a href="product2.html">
                                Repellents &amp; Fresheners
                              </a>
                            </li>
                            <li>
                              <a href="product2.html"> Dishwash</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <li>
                              <a href="product2.html">Pet Care</a>
                            </li>
                            <li>
                              <a href="product2.html">Cleaning Accessories</a>
                            </li>
                            <li>
                              <a href="product2.html">Pooja Needs</a>
                            </li>
                            <li>
                              <a href="product2.html">Crackers</a>
                            </li>
                            <li>
                              <a href="product2.html">Festive Decoratives</a>
                            </li>
                            <li>
                              <a href="product2.html">Plasticware</a>
                            </li>
                            <li>
                              <a href="product2.html">Home Care</a>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </ul>
                  </li>
                  <li className="">
                    <NavLink to={"/faqs"} className="nav-stylehead">
                      Faqs
                    </NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to={"/products-page"} className="nav-stylehead">
                      All Products
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/contact"} className="nav-stylehead">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </div>
  )
}
