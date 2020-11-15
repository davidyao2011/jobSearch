import React from "react";
import logo from '../images/logo.png';
export default function Header() {
  return (
    <header className="header">
    <div>
      <img src = {logo} alt = 'web logo' width = '60' height = '60'/> 
    </div>
      <div className="title">JobLink</div>
    </header>
  );
}
