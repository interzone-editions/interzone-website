import { useRef, useState } from 'react'
import CardItem from './CardItem'
import "./CardList.css"
import { Link } from 'react-router'

function CardList({ items, section }) {
    const [buttonsActive, setButtonsActive] = useState({ prev: false, next: true })
    const lastItems = items.slice(0,8)
    const containerRef = useRef()

    const handleScroll = (scrollRight = true) => {

        const nextScroll = scrollRight ? containerRef.current.scrollLeft + 300 : containerRef.current.scrollLeft - 300
        if (nextScroll >= containerRef.current.scrollWidth - 350) {
            containerRef.current.scrollLeft = containerRef.current.scrollWidth
            setButtonsActive({ prev: true, next: false })

        } else if (nextScroll <= 0) {
            containerRef.current.scrollLeft = 0
            setButtonsActive({ prev: false, next: true })
        }
        else {
            containerRef.current.scrollLeft = nextScroll
            setButtonsActive({ prev: true, next: true })

        }
    }



    return (
        <>
            <div className='mt-4 mb-4 d-flex gap-2 justify-content-start align-items-end'>
            <h2 className='mb-1'>{section}</h2>
            <Link to={`/${section}`} className='more-info-btn'>(See All)</Link>

            </div>
            <div className='card-list-container'>
                <div className="buttons">
                    <button disabled={!buttonsActive.prev} onClick={() => handleScroll(false)} className='card-list-prev-button'>
                        <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                    </button>
                    <button disabled={!buttonsActive.next} onClick={() => handleScroll(true)} className='card-list-next-button'>
                        <span aria-hidden="true" className="carousel-control-next-icon"></span>
                    </button>
                </div>
                <div
                    className="content-box no-scrollbar mb-3"
                    ref={containerRef}
                    style={{
                        width: "100%",
                        overflowX: "scroll",
                        scrollBehavior: "smooth",
                        overflowY: "hidden"
                    }}
                >
                    {lastItems.map((item, index) => (
                        <CardItem
                            key={`cardlist-section-${section}-card${index}`}
                            section={section}
                            item={item}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}

export default CardList