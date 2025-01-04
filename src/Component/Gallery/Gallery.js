import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Gallery;
