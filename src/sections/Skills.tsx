import React from 'react'
import { technologies } from '../constant'
import Technology from '../components/Technology'

const Skills = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-36 scroll-mt-24" id="skills">
      <div className="mb-8 sm:px-7 md:px-0">
        <p className="text-gray-500 text-sm font-semibold xl:text-lg">My Skills</p>
        <p className="text-3xl sm:text-4xl font-bold text-gray-800 ">Technologies<span className="text-purple-600">.</span></p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {technologies.map((item, index) => (
          <Technology key={index} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Skills


