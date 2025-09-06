import "./Footer.css"

function Footer({isMenuOpen}) {
    return (
        <footer className="footer" style={isMenuOpen ? {visibility:'hidden', opacity: "0", height: '0px', width: "0px", padding: "0"}: undefined}>
            <p className="collective-name">Interzone Editions</p>
            <p className="links">Contact / Bandcamp / Instagram / Facebook / Nina</p>
        </footer>
    )
}

export default Footer