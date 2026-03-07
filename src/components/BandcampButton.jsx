import bcLogo from "/src/assets/bc-logo.png"
import "./BandcampButton.css"

function BandcampButton({link}) {
    return (
            <a target="_blank" href={link} className="bc-button" >
                <img className="bc-button-img" src={bcLogo}/>
            </a>
    )
}

export default BandcampButton