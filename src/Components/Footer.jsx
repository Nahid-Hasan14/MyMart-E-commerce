

export default function Footer() {
  return (
    <div>
      <footer>
      <div className="container">
        <div className="footer-info w3-agileits-info">
          {/* footer categories */}
          <div className="col-sm-5 address-right">
            <div className="col-xs-6 footer-grids">
              <h3>Categories</h3>
              <ul>
                <li>
                  <a href="product.html">Grocery</a>
                </li>
                <li>
                  <a href="product.html">Fruits</a>
                </li>
                <li>
                  <a href="product.html">Soft Drinks</a>
                </li>
                <li>
                  <a href="product2.html">Dishwashers</a>
                </li>
                <li>
                  <a href="product.html">Biscuits &amp; Cookies</a>
                </li>
                <li>
                  <a href="product2.html">Baby Diapers</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 footer-grids agile-secomk">
              <ul>
                <li>
                  <a href="product.html">Snacks &amp; Beverages</a>
                </li>
                <li>
                  <a href="product.html">Bread &amp; Bakery</a>
                </li>
                <li>
                  <a href="product.html">Sweets</a>
                </li>
                <li>
                  <a href="product.html">Chocolates &amp; Biscuits</a>
                </li>
                <li>
                  <a href="product2.html">Personal Care</a>
                </li>
                <li>
                  <a href="product.html">Dried Fruits &amp; Nuts</a>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
          {/* //footer categories */}
          {/* quick links */}
          <div className="col-sm-5 address-right">
            <div className="col-xs-6 footer-grids">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="help.html">Help</a>
                </li>
                <li>
                  <a href="faqs.html">Faqs</a>
                </li>
                <li>
                  <a href="terms.html">Terms of use</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 footer-grids">
              <h3>Get in Touch</h3>
              <ul>
                <li>
                  <i className="fa fa-map-marker" /> 123 Sebastian, USA.
                </li>
                <li>
                  <i className="fa fa-mobile" /> 333 222 3333{" "}
                </li>
                <li>
                  <i className="fa fa-phone" /> +222 11 4444{" "}
                </li>
                <li>
                  <i className="fa fa-envelope-o" />
                  <a href="mailto:example@mail.com"> mail@example.com</a>
                </li>
              </ul>
            </div>
          </div>
          {/* //quick links */}
          {/* social icons */}
          <div className="col-sm-2 footer-grids  w3l-socialmk">
            <h3>Follow Us on</h3>
            <div className="social">
              <ul>
                <li>
                  <a className="icon fb" href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="icon tw" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="icon gp" href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="agileits_app-devices">
              <h5>Download the App</h5>
              <a href="#">
                <img src="images/1.png" alt="" />
              </a>
              <a href="#">
                <img src="images/2.png" alt="" />
              </a>
              <div className="clearfix"> </div>
            </div>
          </div>
          {/* //social icons */}
          <div className="clearfix" />
        </div>
        {/* //footer third section */}
      </div>
    </footer>
    {/* //footer */}
    {/* copyright */}
    <div className="copy-right">
      <div className="container">
        <p>
          © 2017 Grocery Shoppy. All rights reserved | Design by
          <a href="http://w3layouts.com"> W3layouts.</a>
        </p>
      </div>
    </div>
    </div>
  )
}
