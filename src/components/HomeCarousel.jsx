import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"
import "./HomeCarousel.css"

export default function HomeCarousel({items}) {
    return (
        <Carousel indicators={false} className="home-carousel">
            {items.map((item, index) => (
                <Carousel.Item key={`home-carousel-item-${index}`}interval={21000}>
                        {item.image && <img className='carousel-img' src={item.image}  />}
                        <Link to={item.link}>
                            <Carousel.Caption className="carousel-caption-title text-lg-start m-0 mb-md-0 px-3 pt-4 mx-auto ms-lg-5 ">
                                <h4 className="carousel-caption-title m-0 pb-1">{item.title}</h4>
                                <p className=" carousel-caption-desc text-center text-lg-start text-truncate my-0 ">{item.desc}</p>
                            </Carousel.Caption>
                        </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}