import { Outlet } from "react-router-dom";
import NavbarTop from "../Components/Navbar/NavbarTop";
import Footer from './../Components/Footer';
import Menubar from "../Components/Navbar/Menubar";


export default function Layout({isAuthenticated, onLogout}) {
  return (
    <div>
      <NavbarTop isAuthenticated= {isAuthenticated} onLogout = {onLogout}/>
      <Menubar />
      <Outlet />
      <Footer />
    </div>
  )
}
