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

const Banner = () => {
  return (
    <div style={bannerImg}>
      <h1 className=" text-light">Read Books at Your Fingertips</h1>
      <div>
      <img src={AppStoreImg} alt="appstore-img" />
      <img src={PlayStoreImg} alt="playstore-img" />
      </div>
    </div>
  );
}

export default Banner