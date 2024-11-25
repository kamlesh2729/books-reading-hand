// import React from 'react'
import Logo from '../assets/website/logo.png'
import {FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow,FaMobileAlt,} from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { Link } from "react-router-dom";

const logo = {
  height: "50px",
  width: "50px",
};
const Footer = () => {
  return (
    <div className=" container-fluid bg-body-tertiary px-5 py-4">
      <div className="row mb-3 border-2 border-bottom border-dark-subtle">
        <div className="col text-start">
          <Link className="navbar-brand fs-3 fw-medium" to="/">
            <img src={Logo} alt="readinghandbook- logo" style={logo} />
            Book
          </Link>
          <p className=" fs-6">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, voluptate.
          </p>
          <ul className="d-flex justify-content-between w-50">
            <li className="list-group-item fs-3">
              <FaFacebook />
            </li>
            <li className="list-group-item fs-3">
              <FaInstagram />
            </li>
            <li className="list-group-item fs-3">
              <FaLinkedin />
            </li>
          </ul>
        </div>
        <div className="col text-start">
          <h3> Our Link</h3>
          <ul>
            <li className="list-group-item py-1">Home</li>
            <li className="list-group-item py-1">About</li>
            <li className="list-group-item py-1">Blog</li>
            <li className="list-group-item py-1">Books</li>
          </ul>
        </div>
        <div className="col text-start">
          <h3>Quick Link</h3>
          <ul className='text-start'>
            <li className="list-group-item py-1">Track Order</li>
            <li className="list-group-item py-1">FAQ</li>
            <li className="list-group-item py-1">Privacy policy</li>
            <li className="list-group-item py-1">Term & Condition</li>
          </ul>
        </div>
        <div className="col text-start">
          <h3>Contact Us</h3>
          <ul className='text-start'>
            <li className="list-group-item py-1">
              <TbMail /> readinghandbook@mail.com
            </li>
            <li className="list-group-item py-1">
              <FaLocationArrow /> Noida, Uttar Pradesh
            </li>
            <li className="list-group-item py-1">
              <FaMobileAlt /> +91 123456789
            </li>
            <li className="list-group-item py-1">4</li>
          </ul>
        </div>
      </div>
      <p className=""> @copyright 2024 All rights reserved</p>
    </div>
  );
}

export default Footer