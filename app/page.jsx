'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Videos from '@/components/Videos'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ── Loading Screen ─────────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Logo text — substituir por <img> com o logo real */}
              <div style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 800,
                fontSize: '1.6rem',
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 24,
              }}>
                Graphic Essence
              </div>
              <div className="loader-ring mx-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Decorative Blobs (fundo estático, não gradiente) ── */}
      <div className="blob blob-blue"   aria-hidden />
      <div className="blob blob-violet" aria-hidden />
      <div className="blob blob-cyan"   aria-hidden />

      {/* ── App ───────────────────────────────────── */}
      <AnimatePresence>
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <Hero />
            <div className="divider" />
            <About />
            <div className="divider" />
            <Services />
            <div className="divider" />
            <Portfolio />
            <div className="divider" />
            <Videos />
            <div className="divider" />
            <Stats />
            <div className="divider" />
            <Testimonials />
            <div className="divider" />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
