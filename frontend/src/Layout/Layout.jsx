import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Layout.css";


export function Layout() {
  return <>
  <div className='layout'>

   <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/retrieveList">Get Shopping List</Link></li>
        </ul>
      </nav>
    </header>
  </div>

    <Outlet />
  </>

}