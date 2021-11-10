import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function Nav() {

  const Handler =()=>{

    return false;

  }

    return (

<div>

<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Restaurant of rice </h5>
    <span class="text-muted">

<Link to="/" target="_blank"> Home</Link>  |
<Link to="/Menu" target="_blank"> our Menu</Link>  |
<Link to="/Connect" target="_blank"> connect with us </Link>


    </span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark" >
  <div class="container-fluid" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"

    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

</div>




    );


}

export default Nav;