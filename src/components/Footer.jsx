// import React from 'react'
import Logo from '../assets/website/logo.png'
import {FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow,FaMobileAlt,} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" container bg-secondary">
      Footer
      <div className="row">
        <div className="col">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="readinghandbook- logo"
              className=" w-25 h-25"
            />
            Book
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus, voluptate.
        </p>
        <span>
          <FaLocationArrow /> Noida, Uttar Pradesh
        </span>
        <span>
          <FaMobileAlt /> +91 123456789
        </span>
        <ul className='flex'>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaLinkedin/></li>
        </ul>
        <div className="col">
          <h3></h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className="col">
          <h3></h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className="col">
          <h3></h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className=" text-light">
          @copyright 2024 All rights reserved || Made with ❤️ by Kamlesh
        </p>
      </div>
    </div>
  );
}

export default Footer