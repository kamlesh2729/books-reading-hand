// import React from 'react'
import AppStoreImg from "../assets/app_store.png";
import PlayStoreImg from "../assets/play_store.png";
import Bannerbg from "../assets/website/banner.jpg";

const bannerImg = {
  backgroundImage: `url(${Bannerbg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const iconlogo = {
  width: "300px",
  height: "100px",
}

const Banner = () => {
  return (
    <div style={bannerImg} className=" p-4 my-3">
      <h1 className=" text-light">Read Books at Your Fingertips</h1>
      <div>
      <img src={AppStoreImg} style={iconlogo} alt="appstore-img" />
      <img src={PlayStoreImg} style={iconlogo} alt="playstore-img" />
      </div>
    </div>
  );
}

export default Banner