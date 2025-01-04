import axios from 'axios'
import React, { useState } from 'react'
import './Contact.css';

const Contact = () => {
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
   </div>
    
        );
    }


export default Contact;
