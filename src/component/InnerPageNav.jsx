import React from "react";
import logo from "../images/Logo2.png";
import home from "../images/Home.png";
import logout from "../images/Logout.png";
import movie from "../images/Movie Projector.png";
import tvseries from "../images/TV Show.png";
import calender from "../images/Calendar.png";
import {useNavigate} from "react-router-dom"

function InnerPageNav() {
  const links = ["Home", "Movies", "TV series", "Upcoming"];
  const linksHref = [" ", " ", " ", " "];
  const linksLogo = [home, movie, tvseries, calender];
  const linkList = links.map((link, index) => (
    <div className="inline-flex items-center hover:border-e-2 hover:bg-red-300 hover:border-red-700 hover:px-10 hover:py-2" key={link[index]}>
      <span className="mr-2 w-5">
        <img src={linksLogo[index]} alt={link} />
      </span>
      <a className="font-semibold " key={link} href={linksHref[index]} onClick={()=>navigate("/movie_web-zuri_lesson_2")}>
        {link}
      </a>
    </div>
  ));
  const navigate = useNavigate()
  return (
    <div className=" bg-bla text-wh w-40 py-3 rounded-e-3xl z-50  hidden sm:block border" >
      <div className="flex justify-between px-2 items-c">
        <img src={logo} alt="logo" className="w-28" />
        <p className=" text-4xl text-red-600">&times;</p>
      </div>
      <nav className="flex flex-col text-black items-center space-y-14 mt-7">{linkList}</nav>
      <div className="border border-red-500 pt-8 my-12 pb-3 bg-red-50 w-10/12  space-y-2 rounded-xl mx-auto px-2">
        <h4 className="text-sm text-black font-semibold text-left">
          Play movie quizes and earn free ticket
        </h4>
        <small className="block text-left">50k people are playing now</small>
        <button className="rounded-xl bg-red-300 px-2 py-1 mt-2 text-xs text-red-600 font-semibold">
          Start Playing
        </button>
      </div>
      <div className="inline-flex items-center my-4 mb-20 hover:border-e-2 hover:bg-red-300 hover:border-red-700 hover:px-10 hover:py-2">
        <img src={logout} className="mr-2  w-6" alt='logout'/>
        <li >Log Out</li>
      </div>
    </div>
  );
}

export default InnerPageNav;