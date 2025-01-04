import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import './Footor.css';
class Footor extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid Footor_bg'>
                    <div className='row'>
                        <div className='col-lg-3'>
                        <div className='About_f'>
                        <h3>About</h3>
                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                        </div>
                        </div>
                        <div className='col-lg-3'>
                        <div className='Menu_f'>
                        <h3>Menu</h3>
                        <li className="nav-ft">
          <Link className="Nav_ft" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-ft">
          <Link className="Nav_ft" to="/About">About Us</Link>
        </li>
        <li className="nav-ft">
          <Link className="Nav_ft" to="/Gallery">Gallery</Link>
        </li>
        <li className="nav-ft">
          <Link className="Nav_ft" to="/Service">Service</Link>
        </li>
        <li className="nav-ft">
          <Link className="Nav_ft" to="/Contact">Contact Us</Link>
        </li>
                        </div>
                        </div>
                        <div className='col-lg-3'>
                        <div className='Useful_f'>
                        <h3>Useful Link</h3>
                        <p>Adipiscing Elit, sed do Eiusmod Tempor incididunt</p>
                        </div>
                        </div>
                        <div className='col-lg-3'>
                        <div className='Contact_f'>
                        <h3>Contact Us</h3>
                       <p><Link className='Footor_l' to="/"><FaLocationDot /> Address : Loram Ipusm</Link> </p> 
                        <p> <Link className='Footor_l' to="/"> <IoIosCall /> Call : +01 1234567890 </Link></p>
                       <p> <Link className='Footor_l' to="/"> <IoMailSharp /> Email : vivektanwer0@gmail.com </Link></p>
                        </div>
                      </div>
                    </div>
                </div>

                <div className='Footor_d'>
                  <p> © 2024 This Website is Create By Vivek </p>
                </div>


            </div>
        );
    }
}

export default Footor;
