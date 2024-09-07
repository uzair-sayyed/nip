import React from 'react'
import ProjectsBanner from './Projects/SectionOne/ProjectsBanner'
import HomeClient from './HomeSection/SectionThree/HomeClient'
import CTA from '../components/common/CTA/CTA'
import { motion } from 'framer-motion'
import PortfolioProjects from './Projects/SectionTwo/PortfolioProjects'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate()
  return (
    <div className='resp-extra-pdg container pt-40'>
      <Helmet>
        <title>Our Projects - Nipralo Technologies | Showcase of Our Work</title>
        <meta name="description" content="Explore the projects we have worked on at Nipralo Technologies. From web development to app solutions, see how we have helped our clients succeed." />
        <meta name="keywords" content="projects, web development, app solutions, case studies, Nipralo Technologies" />
      </Helmet>
      <div>
        <ProjectsBanner />
      </div>

      <div>
        <PortfolioProjects />
      </div>
      <div>
        <HomeClient />
      </div>
      <div className='cntnt grid md:grid-cols-2 md:gap-y-8 lg:grid-cols-4 pt-20 md:pt-40'>
        <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: false }} className='md:border-l py-5 md:border-r md:px-8'>
          <h3>Expert & efficient development</h3>
          <p className='text-[16px]'>Leveraging cutting-edge technologies and agile practices, we deliver your custom tech solutions swiftly while maintaining exceptional quality.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          viewport={{ once: false }} className='md:border-r py-5 md:px-8 border-t md:border-t-0'>
          <h3>Lightning-fast performance</h3>
          <p className='text-[16px]'>Our solutions aren’t just impressive—they’re optimized for speed, ensuring smooth user experiences and enhanced SEO performance.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          viewport={{ once: false }} className='md:border-r py-5  md:px-8 border-t md:border-t-0'>
          <h3>Strategically visible</h3>
          <p className='text-[16px]'>From the start, we integrate SEO best practices into our designs, ensuring your brand stands out in search results and reaches your target audience effectively.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.6 },
          }}
          viewport={{ once: false }} className='md:border-r py-5 md:px-8 border-t border-b md:border-t-0 md:border-b-0'>
          <h3>Flexible & future-proof</h3>
          <p className='text-[16px]'>Our creations are designed to adapt and scale with your business, ensuring they evolve alongside your brand and meet future needs seamlessly.</p>
        </motion.div>
      </div>
      <div className='py-20 md:py-40'>
        <CTA firstTitle={"Ready to Elevate Your Business? Partner with Nipralo Technologies and let’s bring your vision to life."}
          btnInitialText={"Let's Discuss Your Project"}
          btnFlippedText={"Let's Discuss Your Project"}
          btnWidth={"260px"}
          onClick={()=>{
            navigate('/contact')
          }}
        />
      </div>
    </div>
  )
}

export default Portfolio