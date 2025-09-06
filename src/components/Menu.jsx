import "./Menu.css"
import { Link } from "react-router"

function Menu( {closeMenu}) {

    return (
        <ul className="menu-list">
            <li><Link to="" onClick={closeMenu}>About</Link></li>
            <li><Link to="releases" onClick={closeMenu}>Releases</Link></li>
            <li><Link to="events" onClick={closeMenu}>Events</Link></li>
            {/* <li><Link to="" onClick={closeMenu}>Radio</Link></li>
            <li><Link to="" onClick={closeMenu}>Archives</Link></li> 
            <li><Link to="" onClick={closeMenu}>Subscribe</Link></li>*/}
        </ul>
    )
}

export default Menu