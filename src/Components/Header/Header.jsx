import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../img/Logo.png";




const Header = () => {
  function showmodal() {
    document.querySelector(".mobileNav").classList.add("activeNavbar");
  }
  function Rowmodal() {
    document.querySelector(".mobileNav").classList.remove("activeNavbar");
  }
  return (
    <div className="Header">
      <div className="Header_logo">
        <img src={Logo} alt="" />
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/Pricing">Pricing </a>
          </li>
          <li>
            <a href="/About">About </a>
          </li>
          <li>
            <a href="/Blog">Blog </a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="Header_logIn">
        <li>
          <a href="/Login">Login</a>
        </li>
        <button><a href="/Buy Nesa">Buy Nesa</a></button>
      </div>
      <div className="Header_mobileNav">
        <div className="Header_mobileNav_Icon">
          <FontAwesomeIcon
            onClick={showmodal}
            icon={faBars}
            size="3x"
            color="white"
          />
        </div>
        <ul className="mobileNav">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/Pricing">Pricing </a>
          </li>
          <li>
            <a href="/About">About </a>
          </li>
          <li>
            <a href="/Blog">Blog </a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Buy Nesa"> Buy Nesa</a>
          </li>

          <FontAwesomeIcon
            onClick={Rowmodal}
            icon={faXmark}
            size="3x"
            margin-top="100px"
            color="black"


          />

        </ul>
      </div>
    </div>
  );
};
export default Header;
