import { Container, Row } from "react-bootstrap"
import { useOutletContext } from "react-router"
import ReleaseCard from "../components/ReleaseCard"

function Releases() {
    const { releases } = useOutletContext()

    return (
        <Container fluid className="mt-5 pt-5">
            <Row className="m-0 p-0">
                {releases.map((release, index) => (
                    <ReleaseCard
                        key={`${release.catNo}-release-card-${index}`}
                        release={release}
                    />
                ))}
            </Row>

        </Container>
    )
}

export default Releases