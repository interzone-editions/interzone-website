import { Col, Row, Container } from "react-bootstrap"

function SingleRadio() {
    return (
        <Container fluid>
            <Row >
                <Col 
                    sm={12}
                    style={{ backgroundImage: "url('https://thumbnailer.mixcloud.com/unsafe/290x290/profile/5/8/8/4/7d60-4b34-4234-9b4a-67c91dc6f612'" }}
                    className="radio-container d-flex align-items-end justify-content-center">
                    <Row className="h-75 w-100">
                        <Col sm={12} md={6} className="h-75" >

                            <span>hello</span>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleRadio