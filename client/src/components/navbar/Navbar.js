import React , {useState}from 'react';
import "./Navbar.css";
import { SiAnaconda } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  } 


  return (
    <nav className='container navbar'>
      <div className="logo">
        <SiAnaconda color="#fff" size={33}/>
        <p className="logo-text">
          The<span> Hack </span>Report
        </p>
      </div>
      <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li><a href="#">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#news">News</a></li>
          <li><Link to="/signin">Sign In</Link></li>
          {/* <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li> */}
          <li className='nav-btn'><Button text={"Sign Up"} btnClass={"btn-dark"} href={"/signup"} /></li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {
          showMenu ? <RiCloseLine color="#fff" size={33} /> : <AiOutlineBars color="#fff" size={27} />
        }
      </div>
    </nav>
  )
};

export default Navbar;
