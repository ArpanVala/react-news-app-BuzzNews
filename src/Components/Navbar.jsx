import React, { useState } from 'react';
import logo1 from '../Assets/logo1.png';
import menu from '../Assets/menu.png';
import './Navbar.css';

const Navbar = () => {
    let [show,setShow]=useState("hide");
    const navToggle =()=>{
        (show== 'show')?  setShow("hide"): setShow('show');;
    }
  return (
    <>
    <header>
        <nav className="container">
            <div className="logo">
                <img src={logo1} alt="app-logo" />
                <h1><span>Buzz</span> News</h1>
            </div>
            <div className="nav-expand">
                <img src={menu} alt='menu img' onClick={()=>{navToggle()}}/>

            </div>
            <ul className={show}>
                <li><a href="" className='active'>Home</a></li>
                <li><a href="">General</a></li>
                <li><a href="">Health</a></li>
                <li><a href="">Science</a></li>
                <li><a href="">Entertainment</a></li>
                <li><a href="">More</a></li>
                <div className="inputBar">
                    <input type='text' placeholder='Search News'/>
                    <button>Search</button>
                </div>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar
