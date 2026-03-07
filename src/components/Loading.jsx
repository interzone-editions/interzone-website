import "./Loading.css"

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <img 
                    src="https://f4.bcbits.com/img/0030985725_100.png" 
                    alt="Loading..."
                    className="loading-banner"
                />
                <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    )
}
