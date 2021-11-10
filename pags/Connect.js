import React, { Component } from 'react';
import about from '../pags/img/about.jpg'


function Connect() {
    return (

<div>
<div style={{backgroundImage: `url(${about})` , backgroundSize:'100%' , backgroundRepeat:'no-repeat'}}>

<h1 style={{color:'white'}}>Let us hear from you</h1>



</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{margin:'10px'}}>Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <label for="exampleFormControlInput1" className="form-label" style={{margin:'10px'}}>Name</label>
  <input type="Name" class="form-control" id="exampleFormControlInput1"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"  style={{margin:'15px'}}>Massage</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>

  <button type="button" class="btn btn-primary" style={{margin:'25px'}}>Submit</button>
</div>
</div>


    );
}

export default Connect;