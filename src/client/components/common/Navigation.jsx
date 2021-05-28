import React from 'react'
import {NavLink} from 'react-router-dom';
export default function Navigation() {
    const activeStyle = {
         color:'red'
    };
    return (
       <nav>
           <NavLink  exact to='/' activeStyle={activeStyle}>Home</NavLink>
           {' | '}
           <NavLink  to='/products' activeStyle={activeStyle}>Products</NavLink>
           {' | '}
           <NavLink  to='/cart' activeStyle={activeStyle}>Cart</NavLink>
           
       </nav>
    )
}
