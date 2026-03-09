import { Container } from "react-bootstrap"
import { Link } from "react-router"

function NotFound() {
    return (
        <Container
            fluid
            style={{ minHeight: "68vh" }}
            className="d-flex flex-column align-items-center justify-content-center"
        >
            <h1>NOT FOUND</h1>
            <p>The page you are looking for can not be found...</p>
            <Link to="/" className="link">Back to home</Link>
        </Container>
    )
}

export default NotFound