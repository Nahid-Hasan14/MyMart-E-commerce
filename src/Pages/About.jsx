import Bannar from "../Components/Bannar"


export default function About() {
  return (
      <>
      <Bannar />
  <div className="welcome">
    <div className="container">
      {/* tittle heading */}
      <h3 className="tittle-w3l">
        Welcome to our Site
        <span className="heading-style">
          <i />
          <i />
          <i />
        </span>
      </h3>
      {/* //tittle heading */}
      <div className="w3l-welcome-info">
        <div className="col-sm-6 col-xs-6 welcome-grids">
          <div className="welcome-img">
            <img
              src="images/about.jpg"
              className="img-responsive zoom-img"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-xs-6 welcome-grids">
          <div className="welcome-img">
            <img
              src="images/about2.jpg"
              className="img-responsive zoom-img"
              alt=""
            />
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="w3l-welcome-text">
        <p>
          Nam libero tempore cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus omnis optio
          cumque nihil impedit quo minus id quod maxime placeat facere
          possimus.Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae{" "}
        </p>
        <p>
          libero tempore cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus omnis optio
          cumque nihil impedit{" "}
        </p>
      </div>
    </div>
  </div>
  {/* //welcome */}
  {/* video */}
  <div className="about">
    <div className="container">
      {/* tittle heading */}
      <h3 className="tittle-w3l">
        Our Video
        <span className="heading-style">
          <i />
          <i />
          <i />
        </span>
      </h3>
      {/* //tittle heading */}
      <div className="about-tp">
        <div className="col-md-8 about-agileits-w3layouts-left">
          <iframe src="https://player.vimeo.com/video/15520702?color=ffffff&title=0&byline=0" />
        </div>
        <div className="col-md-4 about-agileits-w3layouts-right">
          <div className="img-video-about">
            <img src="images/videoimg2.png" alt="" />
          </div>
          <h4>Grocery Shoppy</h4>
          <p>
            No.1 Leading E-commerce marketplace with over 70 million Products
          </p>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
</>
  )
}
