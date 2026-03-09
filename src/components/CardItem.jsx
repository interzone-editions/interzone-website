import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import ImageLoader from "./ImageLoader"

export default function CardItem({ item, section }) {
    const imageHeight = section === "events" ? "26rem" : "19rem"
    const cardHeight = section === "events" ? "31rem" : "23.7rem"
    return (
        <Card style={{ maxWidth: '18rem', minWidth: "18rem", height: cardHeight}} className='border border-dark rounded-0 p-0'>
            <Link to={`/${section}/${item.id}`} className='more-link bg-black card-img-link'>
                <ImageLoader 
                    src={item.cover} 
                    alt={`${item.section}-${item.title}-poster`} 
                    className='card-img' 
                    style={{height: imageHeight}} 
                    height={imageHeight}
                    width="100%"
                />
            </Link>
            <Card.Body className="px-3">
                <div className="row d-flex justify-content-between">
                    <div className="col-8 justify-content-center">
                    <h4 className='text-white m-0 text-truncate p-0'>{item.title}</h4>
                    </div>
                    <div className="col-2 p-0">
                        <Link className='more-link' to={`/${section}/${item.id}`}>MORE</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}