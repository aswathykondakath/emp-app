import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        
         <nav class="navbar navbar-expand-lg bg-danger ">
  <div class="container-fluid">
    <a class="navbar-brand " href="#" ></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">

        <Link to="/">
          <a class="nav-link active text-white" aria-current="page" href="#"> Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/AddEmp">
          <a class="nav-link text-white" href="#">Add Employee</a></Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav> 


    </div>
  )
}

export default Navbar