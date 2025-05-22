'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import React from 'react'




const achievements = [
  
  
  {
    name: "Thomas Moore",
    description: "Game Developer",
    achievement: "Released successful mobile game with 500K+ players"
  },
  {
    name: "Elizabeth Hall",
    description: "System Architect",
    achievement: "Designed scalable microservices architecture"
  },
  {
    name: "Daniel Young",
    description: "Embedded Systems Engineer",
    achievement: "Developed IoT device with 99.9% uptime"
  },
  {
    name: "Nancy Allen",
    description: "Technical Lead",
    achievement: "Led team to deliver project 2 months ahead of schedule"
  },
  {
    name: "Joseph King",
    description: "Database Administrator",
    achievement: "Optimized database performance by 200%"
  },
  {
    name: "Margaret Wright",
    description: "Product Manager",
    achievement: "Launched successful product generating $5M revenue"
  },
  {
    name: "Charles Scott",
    description: "Network Engineer",
    achievement: "Implemented zero-downtime network upgrade"
  },
  {
    name: "Susan Green",
    description: "Research Scientist",
    achievement: "Published breakthrough paper in AI research"
  }
]

const AchievementCard = ({ name, description, achievement }) => {
  return (
    <div className=" achievement-card flex flex-col items-start p-6 gap-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2 p-3 bg-blue-50 rounded-lg w-full">
        <p className="text-sm text-blue-800 font-medium">{achievement}</p>
      </div>
    </div>
  )
}

export default function FeedBack() {
  useGSAP(() => {
    const animation = gsap.fromTo(
      '.achievement-card',
      { xPercent: 100 },             
      {
        xPercent: -300,             
        ease: 'none',               
        duration: 15,               
        repeat: -1,                 
        stagger: {
          amount: 2,                
          from: "start"              
        },
        modifiers: {
          xPercent: gsap.utils.wrap(-300, 100)  
        }
      }
    )

    // Add hover pause functionality
    const cards = document.querySelectorAll('.achievement-card')
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => animation.pause())
      card.addEventListener('mouseleave', () => animation.play())
    })
  }, [])
    
  
  return (
    <div className="relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_10%,rgba(0,0,0,0.5)_100%)] h-[80vh]">
            <h1 className="text-7xl font-bold text-center text-red-600 font-mono mb-4">STUDENTS WHO WERE JUST LIKE YOU </h1>

    <div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Student Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              name={achievement.name}
              description={achievement.description}
              achievement={achievement.achievement}
            />
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
    .marquee-container {
  @apply flex overflow-hidden;
}

.achievement-card {
  @apply flex-shrink-0;
  /* your other card styles (bg, padding, margin…) */
}`}</style>
    </div>
  )
}
