import { projects } from '../constant'; // your array of projects
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-36 scroll-mt-24 " id="projects">
      <div className="mb-12">
        <p className="text-sm text-gray-500 font-medium uppercase mb-1">Case Study</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Projects<span className="text-purple-600">.</span></h2>
        <p className="text-gray-600 max-w-2xl text-base font-poppins">
          These projects show my hands-on experience with different technologies and my ability to build practical solutions.
          Each project includes a brief description along with links to the live demos and code. They highlight my journey
          as a developer and how I approach <span className="font-medium text-purple-600">solving problems</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
