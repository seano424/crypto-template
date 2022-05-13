import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

const About: NextPage = () => {
  return (
    <Layout 
      title="OnJuno Clone"
      colorScheme="light"
    >
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
        <div className="max-w-[1440px] mx-auto">
          <h1 className='text-center'>Hello About Page!</h1>
        </div>
      </motion.main>
    </Layout>
  )
}

export default About
