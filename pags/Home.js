import React, { Component } from 'react';

import css from '../Style/Home.css'
import rice from './img/rice-medny.png'
import {Link} from 'react-router-dom'


function Home() {
    return (

<div>
<img src={rice}  alt='rice' id='rice'/>
<div className='Header'>
<h1 style={{position:'absolute' , left:'10%' , top:'45%'}}>

Rice Restaurant

</h1>
<p style={{position:'absolute' , left:'10%' , top:'51%'}} id="best">The best  kabsa you will ever eat</p>
<Link  to="/Menu">
<button type="button" class="btn btn-primary"style={{position:'absolute' , left:'10%' , top:'55%'}} >Order Now</button>
</Link>

</div>
<div >

</div>
</div>


     );
}

export default Home;