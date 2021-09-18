import React, { useState } from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'
import menu from './menu.png'

function Navbar(){
    const [show, setShow] = useState(0);
    return(
        <div>
        <nav>
            <p>CarZone</p>
            <ul>
            <NavLink exact activeClassName="active" to="/">
                 <li>HOME</li> 
                 </NavLink>
            <NavLink activeClassName="active" to="/about"> 
            <li>ABOUT</li> 
            </NavLink>
            <NavLink activeClassName="active" to="/offers">
                 <li>OFFERS</li>
             </NavLink>
            <NavLink activeClassName="active" to="/contact">
                 <li>CONTACT</li> 
                 </NavLink>
            </ul>
            <img src={menu} alt="menu" id="menu" onClick={() => setShow(!show)} />
        </nav>
        {show ?
        <div className="hnav">
          <ul>
            <NavLink exact activeClassName="active" to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>ABOUT</li>
            </NavLink>
            <NavLink activeClassName="active" to="/offers">
              <li>OFFERS</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>
        : null
      }
        </div>
    )
}

export default Navbar;