import { Carousel, Modal } from 'react-bootstrap';
import "./CarouselModal.css"
import ImageLoader from './ImageLoader';

export default function CarouselModal(props) {
    return (
        <Modal
            {...props}
            size="xl"
            dialogClassName="modal-90w"
            aria-labelledby="media-modal"
            centered
        >
            <Modal.Header closeButton className='btn-close-white'>
            </Modal.Header>
            <Modal.Body>
                <Carousel interval={null} activeIndex={props.index} onSelect={props.onSelect} indicators={false}>
                    {props.items.map(item => (
                        <Carousel.Item key={`carousel-modal-${item.url}`}>
                            <div className='p-0 m-0 modal-img-section'>
                                <ImageLoader src={item.url} alt="" className="modal-img" />
                            </div>
                        </Carousel.Item>

                    ))}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
}
