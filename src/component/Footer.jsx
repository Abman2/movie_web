import React from "react";
import facebook from "../images/facebok.png";
import twiter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

function Footer() {
  const images = [facebook, instagram, twiter, youtube];
    const getImage = images.map((image,index) => (
        
        <img src={image} alt="a" />
        
      ))
  return (
    <footer className="items-center container text-center bg-slate-50 bottom-0 pt-14 h-52 flex flex-col space-y-5 ">
      <div className="flex space-x-5">
      {getImage}
      </div>
    
      <ul className="flex space-x-5 font-semibold ">
        <li ><a href="">Condition of use</a></li>
        <li><a href="">Privacy & Policy</a></li>
        <li><a href="">Press Room</a></li>
      </ul>
      <p className="text-sm text-slate-400 ">2021 moviebox by Abdulrahman</p>
    </footer>
  );
}
export default Footer
