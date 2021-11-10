import React, { Component } from 'react';
import {Menulist} from '../compo/Menulist';
import menu from '../Style/menu.css'

function Menu() {
    return (

<div >

{Menulist.map((item)=>{

   return (
<div className="card" style={{width: '18rem' , display:'inline-block', margin:'10px' }  }  id='menu'>

  <div className="card-body" >
  <img src={item.img} style={{width:'100%'}} />
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title.<strong><br/> The price:{item.price}</strong></p>
    <a href="#" className="btn btn-primary">Choose</a>
  </div>
</div>


   );
})}



</div>


    );
}

export default Menu ;