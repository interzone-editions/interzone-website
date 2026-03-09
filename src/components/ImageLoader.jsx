import { useState } from 'react'
import { Placeholder } from 'react-bootstrap'

function ImageLoader({ src, alt = "", className = undefined, style = undefined, height = "340px", width = "250px" }) {
    const [loaded, setLoaded] = useState(false)

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <>
            {!loaded &&
                <Placeholder animation="glow" >
                    <Placeholder xs={12} bg='secondary' className={className} style={{ width: width, height: height }} />
                </Placeholder>}
            <img
                src={src}
                alt={alt}
                onLoad={handleLoad}
                style={loaded ? style : { ...style, display: 'none' }}
                className={className}
            />
        </>
    )
}

export default ImageLoader
