import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { useEvent } from "../components/MainLayout"


function SingleEvent() {
    const eventId = useParams().id
    const event = useEvent(eventId)

    return (
        <Container>
            <Row>
                <Col className="col-md-8 d-flex-col mx-md-auto px-3 px-sm-2" >
                    <h1 className="pt-5 mt-3">{event.title}</h1>
                    <p>{event.date}</p>
                    <div className="row mb-3">
                        <div className="col-md-10 mx-auto text-center">
                            <img className="img-fluid" width={600} src={event.cover} />
                        </div>

                    </div>
                    {event.desc.map((paragraph, index) => (
                        <p
                            key={`event-${event.title}-desc-p-${index}`}
                            className="text-justify">
                            {paragraph}
                        </p>
                    ))}
                    {/* TODO: ADD TICKET LINK <a href={event.ticketLink}>TICKET</a> */}
                    <hr className="hr" />
                    {/* TODO: ADD ARCHIVE MEDIA GRID <ArchiveGrid items={imageArchives}/> */}
                </Col>
            </Row>
        </Container>
    )
}

export default SingleEvent