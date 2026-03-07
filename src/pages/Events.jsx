
import { Fragment } from "react"
import { Link, useLocation, useOutletContext } from "react-router-dom"
import { Col, Container, Row, Stack } from "react-bootstrap"

function Events() {
    const location = useLocation().pathname
    const {events} = useOutletContext()
    const eventList = events.map((event, index) => {
        return (
            <Fragment key={`event-list-${event.id}-${event.name}`}>
                <Row>
                    <Col
                        md={{ order: 'first' }} lg={{ order: index % 2 }}
                        className="text-center"
                    >
                        <Link to={event.id} state={{prevLocation: location}} className="more-link">
                            <img src={event.cover} width={500} alt="" className='event-cover' />
                        </Link>
                    </Col>
                    <Col
                        md={{ order: 'last' }}
                        lg={{ order: (index + 1) % 2}}
                        className="mt-lg-0 mt-sm-4 text-lg-start text-center mt-4 mt-md-0"
                    >
                        <h2>{event.name}</h2>
                        <h3>{event.date}</h3>
                        {event.desc && <p className="px-4 px-md-0">{event.desc[0]}</p>}
                        <Link to={event.id} state={{prevLocation: location}} className="more-link">
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