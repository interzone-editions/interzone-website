import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { useRelease } from "../components/MainLayout"
import ArchiveGrid from "../components/ArchiveGrid"
import BandcampPlayer from "../components/BandcampPlayer"


export default function SingleRelease() {
    const releaseId = useParams().id 
    const release = useRelease(releaseId)

    return (
        <Container>
            <Row>
                <Col className="col-md-8 d-flex-col mx-md-auto px-3 px-sm-2" >
                    <h1 className="pt-5 mt-3">{release.title}</h1>
                    <p className="mb-4">{release.artist}</p>
                    <div className="release-player-cover-section">
                        <img className="img-fluid release-cover" src={release.cover} />
                        <BandcampPlayer
                            albumId={release.bandcamp.albumId}
                            packageId={release.bandcamp.packageId}
                            link={release.bandcamp.link}
                            artist={release.artist}
                            title={release.title}
                        />
                    </div>
                    {release.desc.map((paragraph, index) => (
                        <p 
                            key={`release-${release.catNo}-desc-p-${index}`} 
                            className="py-1 text-justify">
                                {paragraph}
                        </p>
                    ))}
                    {release.tracklist && release.tracklist.length !== 0 && (
                        <>
                            <h3 className="mt-4 mb-3">Tracklist</h3>
                            {release.tracklist.map((track, index) => (        
                                <p 
                                    key={`release-${release.catNo}-tracklist-p-${index+1}`} 
                                    className="text-justify mb-2">
                                        {`${index+1}. ${track}`}
                                </p>
                            ))}
                        </>
                    )}
                    
                    <h3 className="mt-4 mb-3">Credits</h3>
                    {release.credits.map((credit, index) => (
                        <p 
                            key={`release-${release.catNo}-desc-p-${index}`} 
                            className="text-justify mb-2">
                                {credit}
                        </p>
                    ))}


                    <hr className="hr my-5" />
                    <ArchiveGrid items={release.media} />
                </Col>

            </Row>


        </Container>
    )
}