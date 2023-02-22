import React from 'react'
import Slider, { Settings } from 'react-slick'

interface IArrowProps {
  onClick: (() => void) | undefined
  isDisabled: boolean
}

const SliderPrevArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button 
      type="button" 
      className={`slick-btn slick-prev ${isDisabled ? 'slick-disabled' : ''}`} 
      onClick={onClick}
    >
      <img 
        src="/images/slider-arr-left.svg" 
        alt="" 
      />
    </button>
  )
}

const SliderNextArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button 
      type="button" 
      className={`slick-btn slick-next ${isDisabled ? 'slick-disabled' : ''}`}
      onClick={onClick}
    >
      <img 
        src="/images/slider-arr-right.svg" 
        alt="" 
      />
    </button>
  )
}

const Top: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const slides = [
    { num: '01', src: '/images/top-bg.webp' },
    { num: '02', src: '/images/top-bg.webp' },
    { num: '03', src: '/images/top-bg.webp' },
    { num: '04', src: '/images/top-bg.webp' },
  ]

  const settings: Settings = {
    autoplay: true,
    draggable: true,
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === slides.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 670,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <section className="top">
      <div className="container-fluid">
        <div className="top__inner rel after">
          <Slider 
            className="top__slider"
            {...settings} 
            ref={(slider: Slider) => setSlider(slider)}
          >
            {slides.map(({ num, src }) => 
              <div className="rel" key={num + src}>
                <div className="top__slider-numbers">
                  <span className="top__slider-num">{num}/</span>
                  <span className="top__slider-total">04</span>
                </div>
                <div className="top__slider-images">
                  <div className="top__slider-img">
                    <img src={src} alt="" />
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Top
