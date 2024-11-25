// import React from 'react'
import Fingertip from '../assets/website/library.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const icon = {
  width: "3rem",
  height: "3rem",
  fontSize: "2.25rem",
  lineHight:"2.5rem",
  borderRadius: "100%",
  padding:"0.8rem",
};

const ftimg = {
  width: "90%",
  height:"90%"
}

const Fingertips = () => {
  return (
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col">
          <img src={Fingertip} style={ftimg} alt="readinghandbooks-fingertips-img" />
        </div>
        <div className="col text-start">
          <h2>Library at your fingertips</h2>
          <p className=" text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            reiciendis inventore iste ratione ex alias quis magni at option.
          </p>
          <div className=' container'>
            <div className='d-flex gap-4 align-items-center my-2'>
              <GrSecure style={icon} className='fticon1' />
              <p className=' pt-2'>Quality Books</p>
            </div>
            <div className="d-flex gap-4 align-items-center my-2">
              <IoFastFood style={icon} className='fticon2'/>
              <p className=' pt-4'>Fast Delivery</p>
            </div>
            <div className="d-flex gap-4 align-items-center my-2">
              <GiFoodTruck style={icon} className='fticon3'/>
              <p className=' pt-4'>Easy Payment method</p>
            </div>
            <div className="d-flex gap-4 align-items-center my-2">
            <GiFoodTruck style={icon} className='fticon4'/>
            <p className=' pt-4'>Get Offers on Books</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fingertips