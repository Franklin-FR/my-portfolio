import React from 'react'

type ExperienceProps = {
    image: any,
    role: string,
    location: string,
    period: string
}
const ExperienceCard = ({image, role, location, period}: ExperienceProps) => {
  return (
    <div className='flex items-center gap-5 bg-white h-44 rounded px-4 transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-950 hover:text-white'>
      <div className=''>
        <img src={image} alt="" className='w-full h-full object-contain rounded-full'/>
      </div>
      <div>
        <p className=' text-xl font-bold'>{role}</p>
        <p className='text-gray-500'>{location}</p>
        <p className='text-gray-400 mb-2'>{period}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
