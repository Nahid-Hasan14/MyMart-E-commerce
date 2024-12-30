import { Link } from "react-router-dom";



export default function ErrorPage() {
  return (
    <div>
      <div className='container'>
      <div className='d-flex justify-content-center'>
        <h2><b>404 !This Page Not Found</b></h2>
        <Link to={"/"}>
        <button className="btn btn-info">Go to Home Page</button>
        </Link>
      </div>

      </div>
    </div>
  )
}

  