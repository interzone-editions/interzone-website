import { Link, useLocation, useParams } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useEvent } from "../components/MainLayout"


function SingleEvent() {
    const eventId = useParams().id
    const event = useEvent(eventId)
    const pastEvent =  new Date(event.date) < new Date()
    const location = useLocation()
    const prevLocation = location.state ? location.state.prevLocation.replace("/", "") : "home"
    const backToLocation = prevLocation === "home" ? "/" : `/${prevLocation}`
    return (
        <Container className="pt-4">
            <Link to={backToLocation} className="back-to-link"> 
                &larr; <span >Back to {prevLocation}</span> 
            </Link>
            <Row className="mb-5">

                <Col lg={8} className="d-flex-col mx-md-auto px-3 px-4" >
                    <h1 className="pt-3 mt-3">{event.title}</h1>
                    <p>{event.date}</p>
                    <Row className="mb-3">
                        <Col md={10} className="mx-auto text-center">
                            <img className="img-fluid" width={600} src={event.cover} />
                        </Col>
                    </Row>
                    {event.desc.map((paragraph, index) => (
                        <p
                            key={`event-${event.title}-desc-p-${index}`}
                            className="text-justify">
                            {paragraph}
                        </p>
                    ))}
                    
                    <Row className="my-4">
                        <a 
                            href={pastEvent ? "javascript:void(0)": event.ticketLink} 
                            target={pastEvent ? "":"_blank"} 
                            className={pastEvent ? "pe-none text-center": "text-center"}>
                        <Button disabled={pastEvent} variant="light" className="ticket-btn">
                            Get your ticket
                        </Button>
                        </a>
                    </Row>
                    {/* TODO: ADD ARCHIVE MEDIA GRID <ArchiveGrid items={imageArchives}/> */}
                </Col> 
            </Row>
        </Container>
    )
}

export default SingleEvent