import { Col, Container, Row } from "react-bootstrap"
import { useOutletContext } from "react-router-dom"

function About() {
    const { about } = useOutletContext()

    return (
        <Container>
            <Row className="pt-1 pb-3 mx-1">
                <Col className="col-lg-9 mx-auto">
                    <h1 className="pt-1 pb-1 mt-3 mt-lg-5">About us</h1>
                    <hr className="hr pb-2" />
                    {about.map((paragraph, index) => <p key={`about-paragraph-${index}`} className="text-justify">{paragraph}</p>)}
                    <h2 className="pt-4 pb-1">Newsletter</h2>
                    <div className="row py-2">
                        <a className="anchor-link" href="https://www.zeffy.com/en-CA/newsletter-form/sign-up-for-our-newsletter-2302" target="_blank">Subscribe for upcoming shows, releases and much more…</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About