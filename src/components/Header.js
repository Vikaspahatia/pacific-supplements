// Header.js

import React from 'react';
import './Header.css';
import logo from "./PS-logo.JPG"
import caption from "./caption.JPG"
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { LuBadgeInfo } from "react-icons/lu";
import { GoInfo } from "react-icons/go";

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="Pharmacy Logo" className="logo" />
        <img src={caption} alt="Pharmacy Logo" className="logo-caption" />
        {/* <span className='logoText'>A BRAND OWNED BY ATHLETES</span> */}

      </div>
      <nav className="nav">

        <AiOutlineUser color='black' size={20} />
        <span className='header-text'>Hello, Log in</span>

        <BsCart2 color='black' size={20} />
        <span className='header-text'>Cart</span>

        <GoInfo color='black' size={20} />
        <span className='header-text'>About us</span>
      </nav>
    </header>
  );
};

export default Header;
