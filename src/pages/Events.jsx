
import { Fragment } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { Col, Container, Row, Stack } from "react-bootstrap"

function Events() {

    const {events} = useOutletContext()
    const eventList = events.map((event, index) => {
        return (
            <Fragment key={`event-list-${event.id}-${event.name}`}>
                <Row>
                    <Col
                        md={{ order: 'first' }} lg={{ order: index % 2 }}
                    >
                        <Link to={event.id} className="more-link">
                            <img src={event.cover} width={500} alt="" className='event-cover' />
                        </Link>
                    </Col>
                    <Col
                        md={{ order: 'last' }}
                        lg={{ order: (index + 1) % 2 }}
                        className="mt-lg-0 mt-sm-4"
                    >
                        <h2>{event.name}</h2>
                        <h3>{event.date}</h3>
                        {event.desc && <p>{event.desc[0]}</p>}
                        <Link to={event.id} className="more-link">
                            More info
                        </Link>
                    </Col>
                </Row>
                <hr className="hr" />
            </Fragment>
        )
    }
    )

    return (
        <Container>
            <Stack gap={4} className="col-md-8 mx-auto">
                <h1 className="mt-5 mb-2 mb-lg-4">Events</h1>
                {eventList}
            </Stack>
        </Container>
    )
}

export default Events