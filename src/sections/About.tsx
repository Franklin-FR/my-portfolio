import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 scroll-mt-24" id="about">
      <div className="max-w-4xl mx-auto text-gray-800 font-poppins">
        <p className="text-sm text-purple-600 uppercase font-semibold mb-2 tracking-wide font-poppins">
          Introduction
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
          Overview<span className="text-purple-600">.</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          As a <span className="font-semibold">FullStack Developer</span>, I specialize in crafting dynamic,
          scalable web applications using modern technologies like <span className="font-semibold">React, Node.js, MongoDB,</span> and <span className="font-semibold">SQL</span>.
          I have led teams in building a SaaS platform, ensuring seamless integration of frontend and backend systems.
          I thrive in <span className="italic">Agile environments</span>, bringing innovation, precision, and a passion for
          problem-solving to every project. I’m always looking for opportunities to create impactful digital experiences
          and collaborate with forward-thinking teams. <span className="font-medium text-purple-600">Let’s connect!</span>
        </p>
      </div>
    </section>
  )
}

export default About

