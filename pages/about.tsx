import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import Layout from '@/components/Layout'
import Hero from '@/components/AboutPage/Hero'
import Banner from '@/components/AboutPage/AboutBanner'
import TeamMembers from '@/components/AboutPage/TeamMembers'
import Values from '@/components/AboutPage/Values'

const About: NextPage = () => {
  return (
    <Layout title="OnJuno Clone" colorScheme="light">
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <main className="pt-20">
          <Hero />
          <Banner
            heading="Our Team"
            subheading="A collective of engineers, designers, and product thinkers driven by the opportunity to create fairer financial systems"
          />
          <TeamMembers />
          <Values />
        </main>
      </motion.main>
    </Layout>
  )
}

export default About
