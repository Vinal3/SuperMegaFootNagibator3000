import { useRef, useState } from "react"
import Carousel from "./components/Carousel"

const images = [
  "../public/images/2022.jpg",
  "../public/images/2023.jpg",
  "../public/images/2024.jpg",
  "../public/images/2025.jpg",
  "../public/images/2026.jpg",
  "../public/images/2027.jpg",
  "../public/images/2028.jpg",
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itGayText, setItGayText] = useState("")

  const viewportRef = useRef(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
    setItGayText("")
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev))
    setItGayText("")
  }

  const geyLevelFromIndex = () => {
    switch (currentIndex) {
      case 0:
        return '30'
      case 1:
        return '3600'
      case 2:
        return '1700'
      case 3:
        return '2800'
      case 4:
        return '7666'
      case 5:
        return '8900'
    }

    return '9000'
  }

  return (
    <div className="body">
      <header className="header">
        <p className="header-title">SuperMegaFootNagibator3000</p>
        <ul className="header-list">
          <li className="header-list-item">
            <img
              className="header-item-image"
              src="../public/icons/hide.svg"
              alt="hide"
              width="35"
            />
          </li>
          <li className="header-list-item">
            <img
              className="header-item-image"
              src="../public/icons/big.svg"
              alt="big"
              width="35"
            />
          </li>
          <li className="header-list-item">
            <img
              className="header-item-image"
              src="../public/icons/close.svg"
              alt="close"
              width="38"
            />
          </li>
        </ul>
      </header>
      <section className="carousel" data-text={itGayText}>
        <div className="choose-year">
          <button
            className="carousel-button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <img
              className="button-image"
              src="../public/icons/left.svg"
              alt=""
              width="38"
            />
          </button>
          <h1 className="carousel-title">{`Year: 202${currentIndex + 2}`}</h1>
          <button
            className="carousel-button"
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
          >
            <img
              className="button-image"
              src="../public/icons/left.svg"
              alt=""
              width="38"
            />
          </button>
        </div>
        <div className="carousel-viewport" ref={viewportRef}>
          <Carousel
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            images={images}
            viewportRef={viewportRef}
          />
        </div>
      </section>
      <footer className="footer">
        <p className="footer-description">
          Thakur's Super Central Processing Unit and Random Access Memory
          Efficient Realistic Human like Cursor Manipulating Python Program
          that's Controlled via a Graphical Processing Unit Accelerated Advanced
          Graphical User Interface (TSCPURAMERHCMPPCGPUAAGUI)
        </p>
        <div className="footer-output">
          <h4 className="footer-output-title">Output</h4>
          <p className="footer-output-description">{"-> No, not yet >:3"}</p>
        </div>
        <div className="button-wrapper">
          <button
            className="button-gay"
            onClick={() =>
              setItGayText(`Gay level exceeding ${geyLevelFromIndex()}%`)
            }
          >
            Gay?
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
