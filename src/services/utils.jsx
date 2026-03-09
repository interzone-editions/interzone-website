export function buildParagraph(releaseId, { link, paragraph, linkSection }, linkIndex) {
    const keyValue = `${releaseId}-buy${linkIndex}0`
    if (!link || !linkSection) {
        return <p key={keyValue}>{paragraph}</p>
    }

    const parts = paragraph.split(linkSection)

    return (
        <p key={keyValue}>
            {parts.map((part, index) => {
                const keyValue = `${releaseId}-buy${linkIndex}${index}`
                return (
                    <span key={keyValue}>
                        {part}
                        {index < parts.length - 1 && (
                            <a href={link} target="_blank" className="anchor-link">{linkSection}</a>
                        )}
                    </span>
                )
            })}
        </p>
    )
}