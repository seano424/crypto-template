import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import Layout from '@/components/Layout'
import Hero from '@/components/AboutPage/Hero'
import AboutBanner from '@/components/Banners/AboutBanner'
import TeamMembers from '@/components/AboutPage/TeamMembers'
import {
  avatarTeam,
  companyValues,
  pressValues,
  realTeam,
  workValues,
  globalOffices,
} from '@/constants/dummyData'
import GridCta from '@/components/AboutPage/GridCta'
import Image from 'next/image'
import GridLocations from '@/components/AboutPage/GridLocations'

const About: NextPage = () => {
  return (
    <Layout title="OnJuno Clone" colorScheme="light" paddingTop={true}>
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
        className="xl:mx-40"
      >
        <Hero />
        <AboutBanner
          heading="Our Team"
          subheading="A collective of engineers, designers, and product thinkers driven by the opportunity to create fairer financial systems"
        />
        <TeamMembers team={avatarTeam} />
        <GridCta values={companyValues} grid={2} />
        <GridCta values={workValues} grid={1} />
        <AboutBanner
          heading="Backed by World-Class Investors"
          subheading="In our mission to build better financial tools, we’re supported by highly regarded investors who’ve previously backed Apple, Paypal, and Youtube."
        />
        <TeamMembers team={realTeam} />
        <GridCta values={pressValues} grid={3} />
        <AboutBanner
          heading="Global & Growing"
          subheading="A global team empowered to solve personal finance."
        />
        <GridLocations />
      </motion.main>
    </Layout>
  )
}

export default About
