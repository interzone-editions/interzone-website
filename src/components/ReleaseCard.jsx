import { Row, Col } from "react-bootstrap"
import { Link, useLocation } from "react-router"
import BandcampButton from "./BandcampButton"

function ReleaseCard({ release }) {
    const location = useLocation().pathname

    return (
        <>
            <Col lg={12} md={12} sm={6} xs={6} className="my-3 d-flex gap-5 align-items-center justify-content-center">
                <Col lg={3} md={4} sm={10} className="text-center mx-auto mx-lg-0 mx-md-0 my-auto">
                    <Link to={release.id} state={{prevLocation: location}} className="link">
                        <img
                            className="release-card-img"
                            src={release.cover}
                            alt=""
                        />

                    </Link>
                </Col>

                <Col lg={8} md={7} className="mb-2 d-none d-md-flex flex-md-column justify-content-between">
                    <Row >
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <h4 className="mb-0">{release.title}</h4>
                            </div>
                            <h5 className="mb-0">{release.catNo}</h5>

                        </div>
                        <span className="text-truncate">{release.artist}</span>
                    </Row>
                    <Row className="my-2">
                        <p
                            key={`release-grid-${release.catNo}-desc`}
                            className="text-height-truncate text-justify py-0 my-0" style={{ maxWidth: "100%" }}>
                            {release.desc.join(" ")}
                        </p>
                    </Row>
                    <Row className="d-flex flex-row justify-content-between me-2">
                        <Link to={release.id} state={{prevLocation: location}} className="more-info-btn">
                            More info
                        </Link>
                        <BandcampButton link={release.bandcamp.link} />
                    </Row>
                </Col>
            </Col>
            <hr className="hr mt-5 d-none d-md-block" />
        </>
    )
}

export default ReleaseCard
