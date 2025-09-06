import { Link } from "react-router"
import logo from "/src/assets/logo.png"

import "./Header.css"

function Header({ isMenuOpen, handleMenu, closeMenu }) {

    return (
        <nav className="header">
            <h1 className="header-title"><Link onClick={closeMenu} to="/">Interzone Editions</Link></h1>
            {isMenuOpen ? (
                <button onClick={handleMenu} className="cross-button fade-in">
                    <span className="cross-line"></span>
                    <span className="cross-line"></span>
                </button>
            ) : (
                <img onClick={handleMenu} src={logo} alt="Interzone Logo" className="fade-in" />
            )}
        </nav>
    )
}

export default Header