'use client'
import Card from "./Cards"
import React, { useEffect, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import gsap from "gsap"

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    
    // Update title color based on rotation
    const title = document.querySelector('.title-text')
    if (title) {
      const progress = slider.track.details.progress
      gsap.to(title, {
        backgroundImage: `radial-gradient(
  circle at center,
  rgba(0, 255, 255, ${1 - progress}) 20%,
  rgba(17, 17, 17,   ${1 - progress}) 80%
)`,
        duration: 0.1
      })
    }
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function RotatingCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  // Add useEffect for GSAP animation on CODING NINJA text
  useEffect(() => {
    const ninjaText = document.querySelector('.ninja-text')
    
    gsap.to(ninjaText, {
      scale: 1.1,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      backgroundImage: "linear-gradient(to right, #ffffff, #4ade80, #a1a1aa)",
      backgroundSize: "200% auto",
      backgroundPosition: "0% center"
    })
  }, [])

  return (
    <>
    <div className="flex flex-row w-[100vw]"> 
      <div className="bg-zinc-900 w-[80vw]">
        <h1 className="font-mono align-middle text-center justify-center text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 title-text hover:from-blue-500 hover:via-cyan-400 hover:to-blue-700 transition-all duration-300" >
            WHY US 
        </h1>
        <div className="wrapper pt-20">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 pt-8 border-2 border-gray-200 rounded-lg shadow-lg">
                <Card 
                  className="h-60"
                  title="Expert Instructors"
                  description="Learn from industry professionals with years of experience"
                  imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format"
                />
              </div>
              <div className="carousel__cell number-slide2 pt-8 border-2 border-gray-200 rounded-lg shadow-lg">
                <Card 
                  className="h-60"
                  title="Live Projects"
                  description="Work on real-world projects to build your portfolio"
                  imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format"
                />
              </div>
              <div className="carousel__cell number-slide3 pt-8 border-2 border-gray-200 rounded-lg shadow-lg">
                <Card 
                  className="h-60"
                  title="Career Support"
                  description="Get placement assistance and career guidance"
                  imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format"
                />
              </div>
              <div className="carousel__cell number-slide4 pt-8 border-2 border-gray-200 rounded-lg shadow-lg">
                <Card 
                  className="h-60"
                  title="Flexible Learning"
                  description="Learn at your own pace with 24/7 access"
                  imageUrl="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format"
                />
              </div>
              <div className="carousel__cell number-slide5 pt-8 border-2 border-gray-200 rounded-lg shadow-lg">
                <Card 
                  className="h-60"
                  title="Community"
                  description="Join a community of passionate learners"
                  imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format"
                />
              </div>
              <div className="carousel__cell number-slide6 pt-8 border-2 border-gray-200 rounded-lg shadow-lg">
                <Card 
                  className="h-60"
                  title="Certification"
                  description="Earn industry-recognized certificates"
                  imageUrl="https://images.unsplash.com/photo-1606159068539-43f36b99d1b3?w=500&auto=format"
                />
              </div>
              <div className="radial-light p-50"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 w-[50vw] flex items-center justify-center">
        <h1 className="font-sans text-center text-8xl font-bold">
          <span className="ninja-text bg-gradient-to-r from-white via-emerald-200 to-zinc-400 text-transparent bg-clip-text">
            CODING NINJA
          </span>
        </h1>
      </div>
    </div>
    <style jsx>
        {`body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vh;
  color:black;
  font-weight: 500;
  height: 60vh;
}

.wrapper {
  display: flex;
  justify-content: center;
}
.scene {
  width: 40vh;
  height: 60vh;
  perspective: 1000px;
  position: relative;
}
.scene .carousel.keen-slider {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: visible;
  transform: translateZ(-288px);
  transform-style: preserve-3d;
}
.carousel__cell {
  position: absolute;
  width: 240px;
  left: 10px;
  height: 40vh;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.radial-light {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at center, #0ff 20%, #111 80%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.6),
    0 0 40px rgba(0, 255, 255, 0.4),
    inset 0 0 20px rgba(0, 255, 255, 0.5);
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow:
      0 0 20px rgba(0, 255, 255, 0.6),
      0 0 40px rgba(0, 255, 255, 0.4),
      inset 0 0 20px rgba(0, 255, 255, 0.5);
  }
  50% {
    box-shadow:
      0 0 40px rgba(0, 255, 255, 0.8),
      0 0 60px rgba(0, 255, 255, 0.6),
      inset 0 0 30px rgba(0, 255, 255, 0.7);
  }
}`}
    </style>
    </>
  )
}
