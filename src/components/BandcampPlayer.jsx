
export default function BandcampPlayer({ albumId, link, title, artist }) {
    return (
        <iframe
            style={{border: 0, width: '100%', maxWidth:"550px"}}
            src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=333333/artwork=none/tracklist=false/transparent=true/`}
            seamless>
            <a href={link}>{title} de {artist}</a>
        </iframe>

    )
}

{/* FOR FUTURE DEVELOPMENT, INCLUDE VIDEOS IN ARCHIVE GRID : 
    {item.bandcamp.videoId && 
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