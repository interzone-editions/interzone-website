import { useParams, Link, useLocation, useOutletContext } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ArchiveGrid from "../components/ArchiveGrid"
import BandcampPlayer from "../components/BandcampPlayer"

function SingleRelease() {
    const { releases } = useOutletContext()
    const releaseId = useParams().id
    const release = useRelease(releases, releaseId)
    const location = useLocation()
    const prevLocation = location.state ? location.state.prevLocation.replace("/", "") : "home"
    const backToLocation = prevLocation === "home" ? "/" : `/${prevLocation}`

    function buildParagraph({ link, paragraph, linkSection }, linkIndex) {
        const keyValue=`${release.catNo}-buy${linkIndex}0`
        if (!link || !linkSection) {
            return <p key={keyValue}>{paragraph}</p>;
        }

        const parts = paragraph.split(linkSection);

        return (
            <p key={keyValue}>
                {parts.map((part, index) => {
                    const keyValue=`${release.catNo}-buy${linkIndex}${index}`
                    return (
                        <span key={keyValue}>
                            {part}
                            {index < parts.length - 1 && (
                                <a href={link} target="_blank" className="anchor-link">{linkSection}</a>
                            )}
                        </span>
                    )}

                )

                }
            </p>
        );
    }
    const buySection = release.buySection && release.buySection.map((linkObject, index) => (
        buildParagraph(linkObject, index)
    ))

    return (
        <Container className="pt-4">
            <Link to={backToLocation} className="back-to-link">
                &larr; <span>Back to {prevLocation}</span>
            </Link>
            <Row>
                <Col className="col-lg-8 d-flex-col mx-sm-auto px-4 px-lg-1" >
                    <h1 className="pt-3 mt-3">{release.title}</h1>
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
                                    key={`release-${release.catNo}-tracklist-p-${index + 1}`}
                                    className="text-justify mb-2">
                                    {`${index + 1}. ${track}`}
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
                    {release.buySection && <h3 className="mt-4 mb-3">Buy</h3>}
                    {buySection}
                    <hr className="hr mt-5" />
                    {release.mediaNote && <p className="fst-italic mb-5">{release.mediaNote}</p>}
                    <ArchiveGrid items={release.media} />
                </Col>
            </Row>
        </Container>
    )
}

function useRelease(releases, releaseId) {
    const release = releases.find(release => release.id === releaseId)
    if (!release) {
        throw {
            message: "Release not found"
        }
    }
    else {
        return release
    }

}

export default SingleRelease