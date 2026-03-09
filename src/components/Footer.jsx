import bcLogo from "/src/assets/bc-logo.png"
import fbLogo from "/src/assets/fb-logo.png"
import instaLogo from "/src/assets/insta-logo.png"
import { Link } from "react-router"
import { Col, Row } from "react-bootstrap"

function Footer() {
    return (
        <footer className="d-flex flex-column gap-3 justify-content-between align-items-center py-3 mt-4 border-top">
            <Row className="w-75">
                <Col md={6} sm={12} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <img className="int-logo-banner" src="https://f4.bcbits.com/img/0030985725_100.png" />
                    <div className="d-flex gap-5 mt-2">
                        <a target="_blank" href="https://www.instagram.com/interzone_editions" className="bc-button" >
                            <img className="bc-button-img" src={instaLogo} />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/lnterzone" className="bc-button" >
                            <img className="bc-button-img" src={fbLogo} />
                        </a>
                        <a target="_blank" href="https://interzoneeditions.bandcamp.com" className="bc-button" >
                            <img className="bc-button-img" src={bcLogo} />
                        </a>
                    </div>
                    <hr className="hr w-50 my-4 d-block d-md-none" />
                </Col>
                <Col md={3} sm={12} xs={12} className="d-flex flex-column gap-2 align-items-center align-items-lg-start align-items-md-start  ps-lg-5 mt-2">
                    <Link to="/about" className="link">
                        <span>About</span>
                    </Link>
                    <Link to="/events" className="link">
                        <span>Events</span>
                    </Link>
                    <Link to="/releases" className="link">
                        <span>Releases</span>
                    </Link>
                    <Link to="/about" className="link">
                        <span>Radio</span>
                    </Link>
                </Col>
                <Col md={3} sm={12} xs={12} className="d-flex flex-column gap-2 align-items-center align-items-lg-start align-items-md-start ps-lg-5 mt-2">
                    <a target="_blank" href="mailto:interzonemontreal@gmail.com" className="link" >
                        <span>Contact</span>
                    </a>
                    <a target="_blank" href="https://www.zeffy.com/en-CA/newsletter-form/sign-up-for-our-newsletter-2302" className="link" >
                        <span>Newsletter</span>
                    </a>
                    <a target="_blank" href="https://www.ninaprotocol.com/hubs/interzone" className="link" >
                        <span>Nina</span>
                    </a>
                    <a target="_blank" href="https://n10.as" className="link" >
                        <span>N10.as</span>
                    </a>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer