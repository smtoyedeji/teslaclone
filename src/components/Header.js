import React, { useState } from 'react'
import logo from "../images/logo.svg"
import CloseButton from 'react-bootstrap/CloseButton'


function Header() {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const sideBarStyle = {
    transform: sideBarStatus ? "translateX(0)" : "translateX(100%)"
  }
  const menuStyle = {
    backgroundColor: "#ccc",
    padding: "0 5px",
    borderRadius: "5px"
  }

  return (
    <div className="header--container">
      <a><img src={logo} alt="" /></a>
      <div className="menu--items--left">
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </div>
      <div className="menu--items--right">
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={() => setSideBarStatus(true)} style={menuStyle}>Menu</a>
      </div>
      <div className="side--menu" style={sideBarStyle}>
        <div className="close--btn--container">
          <CloseButton onClick={() => setSideBarStatus(false)} className="close--btn"/>
        </div>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>   
        <li><a href="#">Used Inventory</a></li> 
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>           
      </div>
    </div>
  )
}

export default Header