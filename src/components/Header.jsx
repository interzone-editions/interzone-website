import { Link } from "react-router"
import { useState } from "react"
import logo from "/src/assets/logo.png"

import "./Header.css"
import Menu from "./Menu"

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    const closeMenu = () => setToggleMenu(false)
    
    const handleClick = () => !toggleMenu 
        ? setToggleMenu(true) 
        : setToggleMenu(false)
    

    return (
        <>
            <nav className="header">
                <h1 className="header-title"><Link onClick={closeMenu} to="/">Interzone Editions</Link></h1>
                {toggleMenu ? (
                    <button onClick={handleClick} className="cross-button fade-in">
                        <span className="cross-line"></span>
                        <span className="cross-line"></span>
                    </button>
                ) : (
                    <img onClick={handleClick} src={logo} alt="Interzone Logo" className="fade-in" />
                )}
            </nav>
            {toggleMenu && <Menu closeMenu={closeMenu}/>}
        </>
    )
}

export default Header