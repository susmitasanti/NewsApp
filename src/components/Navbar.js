import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:"white"}}>NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/general" style={{color:"white"}}>Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/business" style={{color:"white"}}>Business</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" style={{color:"white"}}>Entertainment</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/general" style={{color:"white"}}>General</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/health" style={{color:"white"}}>Health</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/science" style={{color:"white"}}>Science</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports" style={{color:"white"}}>Sports</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology" style={{color:"white"}}>Technology</Link></li>
        
      </ul>
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
