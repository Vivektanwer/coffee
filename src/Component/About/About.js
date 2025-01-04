import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default About;
