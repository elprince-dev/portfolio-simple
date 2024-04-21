'use client'
import { useRef } from 'react';
import './header.scss'
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {

    const links = ["Home", "About", "Projects", "Contact"]
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle('responsiveNav')
    }
  return (
    <div className="header">
        <div className="name">
            <h3>El Prince</h3>
        </div>
        <div className="navbar" ref={navRef}>
            {links.map(link =>(
                <a key={link} className='link' href={`#${link}`} onClick={showNavBar}>{link} </a>
            ))}
            <button onClick={showNavBar} className='navButton navCloseButton'>
                <FaTimes className='FaTimes'/>
            </button>
        </div>
        <button>
            <FaBars onClick={showNavBar} className='FaBars'/>
        </button>   
    </div>
  )
}

export default Header