import React from 'react'
import heroBg from '../assets/hero_bg.jpg'
import profileImg from '../assets/franklyn.jpg'



const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center scroll-mt-24" id='hero'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>


      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="text-white font-poppins">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 font-poppins">HI, I AM FRANKLYN OMOREGIE</h1>
          <h2 className="text-2xl md:text-4xl mb-3 font-poppins">A FullStack Developer</h2>
          <p className="max-w-xl mx-auto text-sm md:text-base font-poppins">
            Welcome to my Portfolio, where creativity meets technology by turning ideas into reality through code and design.
          </p>
        </div>
      </div>
      {/* Profile Image in bottom right */}
      <img
        src={profileImg}
        alt="Franklyn Omoregie"
        className="absolute bottom-6 right-6 w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
      />
    </div>
  )
}

export default Hero

