import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import Layout from '@/components/Layout'
import MainContent from '@/components/HomePage/MainContent'
import BottomContent from '@/components/HomePage/BottomContent'

const Home: NextPage = () => {
  return (
    <Layout colorScheme='dark' title="OnJuno Clone">
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
        <MainContent />
        <BottomContent />
      </motion.main>
    </Layout>
  )
}

export default Home
