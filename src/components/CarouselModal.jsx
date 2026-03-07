import { Carousel, Modal } from 'react-bootstrap';
import "./CarouselModal.css"

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
                                <img className="modal-img" src={item.url} />
                            </div>
                        </Carousel.Item>

                    ))}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
}
