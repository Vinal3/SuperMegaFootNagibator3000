import { useEffect, useRef, useState } from "react"

const Carousel = (props) => {
  const { currentIndex, setCurrentIndex, images, viewportRef, setItGayText } =
    props
  const [offset, setOffset] = useState(0)
  const [leadingSpace, setLeadingSpace] = useState(0)

  const itemsRef = useRef([])
  const trackRef = useRef(null)

  useEffect(() => {
    const activeItem = itemsRef.current[currentIndex]
    const firstItem = itemsRef.current[0]
    const viewport = viewportRef.current
    const track = trackRef.current

    if (activeItem && firstItem && viewport && track) {
      const centerActiveItem = () => {
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0
        const nextLeadingSpace = Math.max(
          0,
          (viewport.clientWidth - firstItem.offsetWidth) / 2 - gap,
        )
        const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2

        setLeadingSpace(nextLeadingSpace)
        setOffset(itemCenter - viewport.clientWidth / 2)
      }

      const resizeObserver = new ResizeObserver(centerActiveItem)
      resizeObserver.observe(viewport)
      resizeObserver.observe(firstItem)
      if (activeItem !== firstItem) resizeObserver.observe(activeItem)
      centerActiveItem()

      return () => resizeObserver.disconnect()
    }
  }, [currentIndex, leadingSpace])

  return (
    <ul
      ref={trackRef}
      className="carousel-track"
      style={{ transform: `translateX(-${offset}px)` }}
    >
      <li
        className="carousel-spacer"
        style={{ width: `${leadingSpace}px` }}
        aria-hidden="true"
      />
      {images.map((src, index) => {
        const isCenter = index === currentIndex
        return (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`carousel-card ${isCenter ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(index)
              currentIndex !== index ? setItGayText("") : pass
            }}
          >
            <img src={src} alt={`Slide ${index}`} />
          </li>
        )
      })}
    </ul>
  )
}

export default Carousel
