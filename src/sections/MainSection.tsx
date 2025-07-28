import React from 'react'
import About from './About'
import RoleCard from '../components/RoleCard'
// import frontend from '../assets/frontend.png'
import { roles } from '../constant'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import ContactForm from './ContactForm'

const MainSection = () => {
  return (
    <div>
      <About/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white py-16 px-6 sm:px-12 lg:px-36">
        {roles.map((item, index) => (
            <RoleCard key={index} image={item.image} role={item.role} />
        ))}
      </div>
      <Skills/>
      <Projects/>
      <div className='px-6 sm:px-12 lg:px-36'>
        <Experience/>
      </div>
      <ContactForm/>
    </div>
  )
}

export default MainSection
