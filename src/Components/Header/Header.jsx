import React from 'react'
import { FaUsers } from "react-icons/fa";
import "./Header.css"
function Header() {
  return (
    <header>
        <div className='header-section'>
            <h1>GITHUB FINDER</h1>
            <p>By  <a href="https://github.com/Sennyruth">Ruth Mutisya</a></p>
            <form action="">
                <input type="text"placeholder='enter a username' />
                <button type='button'>Search</button>
            </form>

      
      </div>
    </header>
   
    
  )
}

export default Header
