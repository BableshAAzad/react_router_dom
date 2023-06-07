import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    let navBox = {
        padding: '10px',
        margin: '20px',
        textAlign: 'center'
    }
  return (
    <div style={navBox}>
      <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/about'>About us</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/contact'>Contact us</Link>
    </div>
  )
}
