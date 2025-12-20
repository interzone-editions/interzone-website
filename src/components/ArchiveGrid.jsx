import "./ArchiveGrid.css"
import { useState } from "react"
import { Col, Container, Row, Button } from "react-bootstrap";
import CarouselModal from "./CarouselModal";

export default function ArchiveGrid({ items }) {
    const [modalShow, setModalShow] = useState(false)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Container fluid className="p-0">
                <Row className="d-flex mx-auto">
                    <Col className="p-0 archive-section text-center">
                        {items.map((item, index) => (
                            <Button className="archive-button" key={`archive-section-${index}`} variant="black" onClick={() => {
                                setModalShow(true)
                                setIndex(index)
                            }}>
                                <img src={item.url} />
                            </Button>
                        ))}
                    </Col>
                </Row>
            </Container>



            <CarouselModal
                handleSelect={handleSelect}
                items={items}
                index={index}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )

}