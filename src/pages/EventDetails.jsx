import { useContext } from "react"
import { useParams, Link } from "react-router"
import { EventsContext } from "../contexts/Contexts"
import "./EventDetails.css"

function EventDetails() {
    
    const items = useContext(EventsContext)
    function findItemById(id) {
        const item = items.find(item => item.id === id)
        return item ? item : undefined
    }
    const itemId = useParams().id
    const item = findItemById(itemId)
    return (
        <>
            <div className="back-button-container">
                <Link to="/events" className="back-button">
                    ← Back to Events
                </Link>
            </div>
            
            <div className="title">
                <h3>{item.name}</h3>
            </div>
            <div className="details-container">
                <div className="event-cover">
                    <img src={item.cover} alt={`${item.name} poster`}/>
                    {/* {item.bandcamp.videoId && <iframe border={"none"} width={"560px"}  height={"436px"} src={`https://bandcamp.com/VideoEmbed?track=${item.bandcampLink.videoId}&bgcol=333333&linkcol=e32c14`} mozallowfullscreen="1" webkitallowfullscreen="1" allowfullscreen="1" seamless></iframe>}
                    {item.bandcamp.packageId ? 
                        <iframe border={"none"} width={"350px"}  height={"537px"} src={`https://bandcamp.com/EmbeddedPlayer/album=${item.bandcampLink.albumId}/size=large/bgcol=333333/linkcol=e32c14/package=${item.bandcampLink.packageId}/tracklist=false/transparent=true/`} seamless><a href={item.bandcampLink.link}>{item.title} de {item.artist}</a></iframe> :
                        <iframe border={"none"} width={"350px"}  height={"470px"}src={`https://bandcamp.com/EmbeddedPlayer/album=${item.bandcampLink.albumId}/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/`} seamless><a href={item.bandcampLink.link}>{item.title} de {item.artist}</a></iframe>
                    } */}
                </div>
                <div className="description">
                    <p>A concert featuring {item.artists.join(", ")}</p>
                    {item.credits.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
            </div>
        </>
    )
}

export default EventDetails