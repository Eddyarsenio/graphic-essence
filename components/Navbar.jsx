'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X } from 'lucide-react'

const links = [
  { label: 'Início',    href: '#hero'     },
  { label: 'Sobre',     href: '#sobre'    },
  { label: 'Serviços',  href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio'},
  { label: 'Vídeos',    href: '#videos'   },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : ''}`}
      initial={{ y: -80 }} animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:72 }}>
        <a href="#hero" style={{ textDecoration:'none' }}>
          <a href="#hero" style={{ textDecoration:'none' }}>
  {/*
    Coloca o teu logo em public/logo.png (ou .svg)
    e substitui o span abaixo por:
    <img src="/logo.png" alt="Graphic Essence" style={{ height: 38 }} />
  */}
  <img src="/logo-ge.png" alt="Graphic Essence" style={{ height: 38 }} />
</a>
        </a>

        <nav className="hidden md:flex" style={{ gap:4 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              padding:'8px 14px', borderRadius:100, fontSize:'0.875rem', fontWeight:500,
              color:'var(--text-secondary)', textDecoration:'none', transition:'color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='rgba(255,255,255,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.background='transparent' }}
            >{l.label}</a>
          ))}
        </nav>

        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <a href="https://wa.me/258876758971" target="_blank" rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex" style={{ padding:'10px 22px', fontSize:'0.82rem', gap:8 }}>
            <MessageCircle size={15} /> WhatsApp
          </a>
          <button onClick={() => setMenuOpen(o => !o)} className="md:hidden" style={{
            width:40, height:40, borderRadius:10, border:'1px solid rgba(0,0,0,0.08)',
            background:'rgba(255,255,255,0.7)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            transition={{ duration:0.25 }}
            style={{ background:'rgba(245,247,250,0.95)', backdropFilter:'blur(24px)',
              borderTop:'1px solid rgba(255,255,255,0.8)', padding:'16px 24px 24px',
              display:'flex', flexDirection:'column', gap:4 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
                padding:'12px 16px', borderRadius:12, fontWeight:500,
                color:'var(--text-secondary)', textDecoration:'none', fontSize:'0.95rem',
              }}>{l.label}</a>
            ))}
            <a href="https://wa.me/258876775897" className="btn-whatsapp"
              style={{ marginTop:8, justifyContent:'center', display:'flex', gap:8, alignItems:'center' }}>
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
