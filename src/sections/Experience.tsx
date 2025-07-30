import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../constant'
import { motion } from 'framer-motion'
import downloadIcon from '../assets/downloadIcon.svg'

const Experience = () => {
  return (
    <div className='bg-black px-6 py-12 sm:px-12 rounded-tr-[100px] rounded-bl-[80px] border p-4 scroll-mt-24' id="experience">
      <p className='text-gray-500 text-sm font-semibold xl:text-lg'>WHAT I HAVE DONE SO FAR</p>
      <h2 className='font-black text-white text-2xl xl:text-3xl'>EXPERIENCES.</h2>

       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {experiences.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ExperienceCard {...project} />
          </motion.div>
        ))}
      </div>
      {/* download resume */}
     

   <a href="/Omoregie Franklyn Edamwen_FULLSTACK.pdf" download>
  <div className="bg-white w-fit px-4 py-3 rounded-lg mt-5">
    <div className="flex items-center justify-between bg-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-900 gap-3">
      <p className="text-white font-medium whitespace-nowrap">Download Resume</p>
      <img src={downloadIcon} alt="Download" className="w-5 h-5" />
    </div>
  </div>
</a>








    </div>
  )
}

export default Experience
