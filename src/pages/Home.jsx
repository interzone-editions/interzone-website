import { useOutletContext } from "react-router-dom"
import { Container } from "react-bootstrap"
import CardList from "../components/CardList"
import HomeCarousel from "../components/HomeCarousel"
import "./Home.css"

function Home() {
    const {recent, events, releases} = useOutletContext()
    return (
        <>
            <HomeCarousel items={recent}/>
            <Container  fluid className="px-5 my-5">
                <hr className="hr my-5"/>
                <CardList section={"events"} items={events}/>
                <hr className="hr mb-5 mt-4"/>
                <CardList section={"releases"} items={releases}/>
            </Container>
        </>
    )
}

export default Home
