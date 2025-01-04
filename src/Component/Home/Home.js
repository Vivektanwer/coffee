// import React, { Component } from 'react';
import axios from 'axios'
import React, { useState } from 'react'

import './Home.css';
import { GiCoffeeCup } from "react-icons/gi";
import { GiCoffeeMug } from "react-icons/gi";
import { TbCoffee } from "react-icons/tb";



const Home = () => {
  const [state,setState]=useState({
      fname:'',
      email:'',
      pwd:'',
      mess:'',
      
  })
  const [msg,setMsg]=useState();

  const hanlder=(e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value});

  }
  const signUp=(e)=>{
      e.preventDefault();
      console.log(state);
      axios.post("http://localhost:4004/emp-details",state)
      .then((res)=>{
           console.log(res);
          setMsg(res.data.message);
      })
  }
          return (
            <div>
                                    {/* Slider Start */}

               <div id="carouselExampleCaptions" className="carousel slide VFX">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="pic/banner-bg.png" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block Slide">
        <h3>Outstanding</h3>
        <h1><b>Coffee Shop</b></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
        <button type='submit'>Learn More</button> 
      </div>
    </div>
    <div className="carousel-item">
      <img src="pic/banner-bg.png" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block Slide">
      <h3>Outstanding</h3>
        <h1><b>Coffee Shop</b></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
        <button type='submit'>Learn More</button> 
      </div>
    </div>
    <div className="carousel-item">
      <img src="pic/banner-bg.png" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block Slide">
      <h3>Outstanding</h3>
        <h1><b>Coffee Shop</b></h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
        <button type='submit'>Learn More</button> 
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
    
                                    {/* Slider Close */}

                                      {/* ABOUT START   */}

<div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
            <div className='About_Box'>
            <h1><b>ABOUT US</b></h1>
            <p>Full cleaning and housekeeping services for companies and households.<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p><br/>
            <button type='submit'>Read More</button>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='About_Box'>
                <img src='pic/about-img.png'></img>
                 
            </div>
        </div>
    </div>
</div>                        
                                        {/* ABOUT CLOSE */}

                                        {/* GALLERY START */}

<div className='container Gallery'>
  <div className='row'>
    <div className='col-lg-12'>
      <h1><b>Our Gallery</b></h1>
    </div>
  </div>
</div>
<div className='container Gallery'>
  <div className='row'>
    <div className='col-lg-12'>
      <p>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
    </div>
  </div>
</div>
<div className='container Gallery_Pic'>
  <div className='row'>
    <div className='col-lg-4'>
<img src='pic/img-1.png'></img>
    </div>
    <div className='col-lg-4'>
<img src='pic/img-2.png'></img>
    </div>
    <div className='col-lg-4'>
<img src='pic/img-3.png'></img>
    </div>
    </div>
</div>
<div className='container Gallery_pic'>
  <div className='row'>
    <div className='col-lg-4'>
<img src='pic/img-4.png'></img>
    </div>
    <div className='col-lg-4'>
<img src='pic/img-5.png'></img>
    </div>
    <div className='col-lg-4'>
<img src='pic/img-6.png'></img>
    </div>
    </div>
</div>
<div className='container Gallery_pic'>
  <div className='row'>
    <div className='col-lg-4'>
<img src='pic/img-7.png'></img>
    </div>
    <div className='col-lg-4'>
<img src='pic/img-8.png'></img>
    </div>
    <div className='col-lg-4'>
<img src='pic/img-9.png'></img>
    </div>
    <div className='but'>
      <button type="submit">See More</button>
    </div>
    </div>
</div>

                                {/* GALLERY CLOSE */}


                                {/* SERVICE START */}
 <div className='container Service_bg'>
  <div className='row'>
    <div className='col-lg-12'>
  <h1><b>Services</b></h1>
  <p>Typesetting industry lorem Ipsum is simply dummy text of the</p>
  
  <div className='container'>
  <div className='row'>
    <div className='col-lg-4'>
    <div className='Service_Box'>
    <i><GiCoffeeMug /></i>
    <h2>Original Coffee</h2>
    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
    <div className='but'>
    <button type='submit'>READ MORE</button>
    </div>
    </div>
    </div>
    <div className='col-lg-4'>
    <div className='Service_Box'>
    <i><GiCoffeeCup /></i>
    <h2>20 Coffee Flavors</h2>
    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
    <div className='but'>
    <button type='submit'>READ MORE</button>
    </div>
</div>
    </div>
    <div className='col-lg-4'>
    <div className='Service_Box'>
    <i><TbCoffee /></i>
    <h2>Pleasant Abient</h2>
    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
    <div className='but'>
    <button type='submit'>READ MORE</button>
    </div>
</div>
    </div>
    </div>
    </div>
    </div>

</div>
</div>





                                {/* SERVICE CLOSE */}


                                {/* CONTACT START */}
<div className='container Contact_us'>
  <div className='row'>
   <div className='col-lg-12'>
    <h1><b>Contact Us</b></h1>
</div>
</div>
</div>
<div className='container-fluid'>
<div className="row">
           
           
            <div className="col-md-6">
            {msg ? 
            <div className='alert alert-success'>{msg}</div>
             : ''}
            <form action="" onSubmit={signUp}>

            <div className='Contact_img'>
<input type='textbox' class="form-control cant" name='fname' onChange={hanlder}   placeholder='Name'></input><br/>

<input type='email' class="form-control cant" name='email' onChange={hanlder}  placeholder='Email'></input><br/>

<input type='>Password' class="form-control cant" name='pwd' onChange={hanlder}  placeholder='Password'></input><br/>

<textarea class="form-control can" name='mess' onChange={hanlder}  placeholder='Massage'></textarea>

<button type='submit' value="Sign Up" className='btn btn-primary'>Send</button>
 
 </div>
   </form>
    </div>
    
    <div className='col-lg-6'>
    <div className='Contact_map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3988120613412!2d77.1059954745759!3d28.707625180668398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01219fd33c09%3A0x1bfc304e4eaa4144!2sDSSD!5e0!3m2!1sen!2sin!4v1721453108385!5m2!1sen!2sin" style={{border:"0",width:"100%",height:"500px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
    </div>
    </div>
   </div> 

                                {/* CONTACT CLOSE */}


                                



            </div>
        );
    }


export default Home;
