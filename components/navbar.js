import React from 'react';
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import searchIcon from './search-icon.png';
import {Link} from 'react-router-dom';
import signUp from './signUp1';
class Navbar extends Component{
    constructor()
    {
      super();
      let u="Name"
      try{
        u =  JSON.parse(localStorage.getItem("jwt")).user;
      }catch(e){
          console.log('error: '+e);
      }
      this.state={name:u}//commment krde ...ki comment kra..ehi..is it okyaya..chla k dekhio
    }
    render()
    {
        return(
            <div className="container fluid" style={{maxWidth: "100%",fontSize:"1.2vw"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
      <img src={logo} height="39vh" alt="not available"></img>
  </a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      
      <li className="nav-item ">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/add">Categories</Link>
      </li>
      {/* <li className="nav-item ">
        <Link className="nav-link" to="/add">Technical</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/add">Management</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/add">Sports</Link>
      </li> */}
    </ul>
  </div>
  {/* <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm"> 
  <i class="fa fa-sign-in"></i></a> */}
  <Link className="navbar-brand" to="/signUp">
    <i class="fa fa-sign-in"></i>
  </Link> &nbsp;&nbsp;
  <div>
  <i class="fa fa-user" aria-hidden="true"></i>
  {/* <p style={{color:"black"}}>{this.state.name}</p> */}
   &nbsp;&nbsp;
  </div>
  <a className="navbar-brand" href="#">
      <img src={searchIcon} height="39vh"alt="not available"></img>
  </a>
</nav>
        </div>
        )
    }
}
export default Navbar;