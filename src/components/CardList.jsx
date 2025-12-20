import { useRef, useState } from 'react'
import CardItem from './CardItem'
import "./CardList.css"

function CardList({ items, section }) {
    const [buttonsActive, setButtonsActive] = useState({ prev: false, next: true })
    const lastItems = items.slice(0,8)
    const containerRef = useRef()

    const handleScroll = (scrollRight = true) => {

        const nextScroll = scrollRight ? containerRef.current.scrollLeft + 400 : containerRef.current.scrollLeft - 400
        if (nextScroll >= containerRef.current.scrollWidth - 450) {
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
            <h2 className='mt-4 mb-4'>{section}</h2>
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