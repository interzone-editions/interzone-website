import { Link, useLocation } from "react-router"
import { getContext } from "../contexts/Contexts"
import "./Grid.css"

function Card({item}) {

    return (
        <div className="grid-tile">
            <img className="tile-image" src={item.cover} alt={item.catNo ? item.catNo : item.name} />
            <div className="tile-overlay">
                <div className="tile-text">
                    {item.catNo && <p>{item.catNo}</p>}
                    <p>{item.title ? item.title : item.name}</p>
                </div>
            </div>
        </div>
    )
}

function Grid() {
    const location = useLocation()
    const context = getContext(location)
    
    const cards = context.map(item => (
        <Link key={`grid-card-${item.id}`} to={item.id}>
            <Card  item={item} />
        </Link>
    ))
    
    return (
        <div className="cards">  
            {cards} 
        </div>
    )
}

export default Grid