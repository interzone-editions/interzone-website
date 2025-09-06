import "./MainLayout.css"

import { Outlet } from "react-router-dom"
import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Menu from "./Menu"

export default function MainLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const closeMenu = () => setIsMenuOpen(false)
    
    const handleMenu = () => !isMenuOpen 
        ? setIsMenuOpen(true) 
        : setIsMenuOpen(false)

    return (
        <div className="site-wrapper" style={isMenuOpen ? {overflow: "hidden"}: undefined}>
            <Header isMenuOpen={isMenuOpen} handleMenu={handleMenu} closeMenu={closeMenu}/>
            {isMenuOpen && <Menu closeMenu={closeMenu}/>}
            <main className="main-layout" style={isMenuOpen ? {maxHeight: '80vh', overflow: 'hidden'}:undefined}>
                <Outlet />
            </main>
            <Footer isMenuOpen={isMenuOpen}/>
        </div>
    )
}