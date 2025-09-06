import { useContext } from "react"
import { useParams, Link } from "react-router"
import { ReleasesContext } from "../contexts/Contexts"
import "./ReleaseDetails.css"

function ReleaseDetails() {
    
    const items = useContext(ReleasesContext)
    function findItemById(id) {
        const item = items.find(item => item.id === id)
        return item ? item : undefined
    }
    const itemId = useParams().id
    const item = findItemById(itemId)
    
    return (
        <>
            <div className="back-button-container">
                <Link to="/releases" className="back-button">
                    ← Back to Releases
                </Link>
            </div>
            
            <div className="title">
                {/* <h3>{item.catNo}</h3> */}
                <h3>{item.artist} - {item.title}</h3>
            </div>
            <div className="details-container">
                <div className="details-player">
                    {/* {item.bandcamp.videoId && 
                        <iframe 
                            border={"none"} 
                            width={"560px"}  
                            height={"436px"} 
                            src={`https://bandcamp.com/VideoEmbed?track=${item.bandcamp.videoId}&bgcol=333333&linkcol=e32c14`} 
                            mozallowfullscreen="1" 
                            webkitallowfullscreen="1" 
                            allowfullscreen="1" 
                            seamless>
                        </iframe>
                    } */}
                    {item.bandcamp.packageId ? 
                        <iframe 
                            border={"none"} 
                            width={"350px"}  
                            height={"537px"} 
                            src={`https://bandcamp.com/EmbeddedPlayer/album=${item.bandcamp.albumId}/size=large/bgcol=333333/linkcol=e32c14/package=${item.bandcamp.packageId}/tracklist=false/transparent=true/`} 
                            seamless>
                                <a href={item.bandcamp.link}>{item.title} de {item.artist}</a>
                        </iframe> 
                        :
                        <iframe 
                            border={"none"} 
                            width={"350px"}
                            height={"470px"}
                            src={`https://bandcamp.com/EmbeddedPlayer/album=${item.bandcamp.albumId}/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/`} 
                            seamless>
                                <a href={item.bandcamp.link}>{item.title} de {item.artist}</a>
                        </iframe>
                    }
                </div>
                <div className="description">
                    {item.desc.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    {/* {item.credits.map(paragraph => <p key={paragraph}>{paragraph}</p>)} */}
                </div>
            </div>
        </>
    )
}

export default ReleaseDetails