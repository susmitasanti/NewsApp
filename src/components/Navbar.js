import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg"  style={{backgroundColor:this.props.currentMode==="light"?"#adb5bd" : "black"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:this.props.currentMode==="light"?"black":"white"}}>NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/general" style={{color:this.props.currentMode==="light"?"black":"white"}}>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/business" style={{color:this.props.currentMode==="light"?"black":"white"}}>Business</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" style={{color:this.props.currentMode==="light"?"black":"white"}}>Entertainment</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/general" style={{color:this.props.currentMode==="light"?"black":"white"}}>General</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/health" style={{color:this.props.currentMode==="light"?"black":"white"}}>Health</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/science" style={{color:this.props.currentMode==="light"?"black":"white"}}>Science</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports" style={{color:this.props.currentMode==="light"?"black":"white"}}>Sports</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology" style={{color:this.props.currentMode==="light"?"black":"white"}}>Technology</Link></li>
        
      </ul>
      <button type="button" class="btn" style={{backgroundColor:"white"}} onClick={this.props.lightMode}>Light</button>
        &nbsp;<button type="button" class="btn" style={{backgroundColor: "#343a40", color:"white"}} onClick={this.props.darkMode}>Dark</button> 
        &nbsp; <button type="button" class="btn" style={{backgroundColor:"#3a5a40", color: "white"}} onClick={this.props.darkGreenMode}>Dark Green</button>
        &nbsp; <button type="button" class="btn" style={{backgroundColor:"#1d3557", color: "white"}} onClick={this.props.darkBlueMode}>Dark Blue</button>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      </div>
    )
  }
}
