import React, { Component } from 'react';
import { GiCoffeeCup } from "react-icons/gi";
import { GiCoffeeMug } from "react-icons/gi";
import { TbCoffee } from "react-icons/tb";
import './Service.css';

class Service extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Service;
