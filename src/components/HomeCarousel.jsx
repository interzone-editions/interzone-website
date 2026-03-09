import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom"
import "./HomeCarousel.css"
import ImageLoader from './ImageLoader'

export default function HomeCarousel({items}) {
    return (
        <Carousel indicators={false} className="home-carousel">
            {items.map((item, index) => (
                <Carousel.Item key={`home-carousel-item-${index}`}interval={5000}>
                        <ImageLoader 
                            src={item.image} 
                            alt={item.title} 
                            className="carousel-img"
                            width="100%"
                            height="100%"  
                        />
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