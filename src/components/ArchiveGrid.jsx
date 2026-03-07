import "./ArchiveGrid.css"
import { useState } from "react"
import { Col, Container, Row, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import CarouselModal from "./CarouselModal";

export default function ArchiveGrid({ items }) {
    const [modalShow, setModalShow] = useState(false)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Container fluid className="p-0 m-0">
                <Row className="d-flex">
                    <Col className="p-0 m-0 archive-section text-center">
                        {items.map((item, index) => (
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip>{item.desc? item.desc:undefined}</Tooltip>}
                                key={`archive-section-${index}`}
                            >
                            <Button className="archive-button"  variant="black" onClick={() => {
                                setModalShow(true)
                                setIndex(index)
                            }}>
                                <img src={item.url} />
                            </Button>

                            </OverlayTrigger>
                        ))}
                    </Col>
                </Row>
            </Container>

            <CarouselModal
                onSelect={handleSelect}
                items={items}
                index={index}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )

}