// import React from 'react'
import Fingertip from '../assets/website/library.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Fingertips = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img src={Fingertip} alt="readinghandbooks-fingertips-img" />
        </div>
        <div className="col">
          <h2>Library at your fingertips</h2>
          <p className=" text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at option.
          </p>
          <div className=' container'>
            <div>
              <GrSecure/>
              <p className="col">Quality Books</p>
            </div>
            <div className="row">
              <IoFastFood/>
              <p className="col">Fast Delivery</p>
            </div>
            <div className="row">
              <GiFoodTruck/>
              <p className="col">Easy Payment method</p>
            </div>
            <div className="row">
            <GiFoodTruck/>
            <p className="col">Get Offers on Books</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fingertips