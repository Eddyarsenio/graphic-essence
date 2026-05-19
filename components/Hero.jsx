'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, MessageCircle, Zap, MapPin } from 'lucide-react'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const glowX = useTransform(springX, v => v * 0.04)
  const glowY = useTransform(springY, v => v * 0.04)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fn = e => {
      const r = el.getBoundingClientRect()
      mouseX.set(e.clientX - r.left - r.width / 2)
      mouseY.set(e.clientY - r.top  - r.height / 2)
    }
    el.addEventListener('mousemove', fn)
    return () => el.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section id="hero" ref={ref} className="section" style={{ minHeight:'100vh', display:'flex', alignItems:'center', paddingTop:88 }}>
      <div className="container" style={{ width:'100%' }}>

        {/* Grid — 1 coluna em mobile, 2 em desktop */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr',
          gap:40,
          alignItems:'center',
        }}
          className="md:grid-cols-2"
        >

          {/* ── Texto ── */}
          <div>
            <motion.div className="section-label" style={{ marginBottom:20 }}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
              Design Criativo · Marketing Digital
            </motion.div>

            <motion.h1 className="display-xl"
              initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}>
              Crio{' '}
              <span className="gradient-text">experiências</span>
              {' '}visuais que{' '}
              <span style={{ color:'var(--violet)' }}>vendem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
              style={{ fontSize:'1rem', lineHeight:1.7, color:'var(--text-secondary)', marginTop:20, marginBottom:32 }}>
              Design gráfico, edição de vídeo e gestão de marketing digital para marcas que querem destacar-se em Moçambique e além.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}
              style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="#portfolio" className="btn-primary">
                Ver Portfólio <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/258876758971" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.5 }}
              style={{ display:'flex', gap:24, marginTop:40, paddingTop:32, borderTop:'1px solid rgba(0,0,0,0.06)', flexWrap:'wrap' }}>
              {[['50+','Projetos'],['30+','Clientes'],['3+','Anos']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontWeight:800, fontSize:'1.4rem', letterSpacing:'-0.03em', color:'var(--blue)' }}>{n}</div>
                  <div style={{ fontSize:'0.8rem', color:'var(--text-muted)', marginTop:2 }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Visual — só aparece em desktop ── */}
          <motion.div
            initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.9, delay:0.2 }}
            style={{ position:'relative', display:'flex', justifyContent:'center' }}
            className="hidden md:flex"
          >
            <motion.div style={{
              position:'absolute', width:300, height:300, borderRadius:'50%',
              background:'radial-gradient(circle, rgba(208,21,21,0.12) 0%, rgba(208,21,21,0.04) 60%, transparent 100%)',
              filter:'blur(40px)', x:glowX, y:glowY,
              top:'50%', left:'50%', transform:'translate(-50%,-50%)',
            }} />

            {/* Card da foto */}
            <motion.div
              animate={{ y:[0,-12,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut' }}
              className="glass-card"
              style={{ borderRadius:28, overflow:'hidden', width:300, height:360, position:'relative' }}>
              {/*
                ══ FOTO DO EDMILSON ════════════════════════
                Substituir por:
                <img src="/images/edmilson.jpg" alt="Edmilson Massingue"
                  style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                ════════════════════════════════════════════
              */}
              <img src="/images/logoge.png" alt="Edmilson Massingue"
                style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </motion.div>

            {/* Badge 1 */}
            <motion.div
              animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:1 }}
              className="glass-card"
              style={{ position:'absolute', bottom:40, left:-20, borderRadius:20, padding:'12px 16px',
                display:'flex', alignItems:'center', gap:10, minWidth:160 }}>
              <div style={{ width:34, height:34, borderRadius:10, background:'rgba(208,21,21,0.10)',
                display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Zap size={16} color="#D01515" />
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:'0.82rem' }}>Marketing Digital</div>
                <div style={{ fontSize:'0.7rem', color:'var(--text-muted)' }}>Resultados reais</div>
              </div>
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut', delay:0.5 }}
              className="glass-card"
              style={{ position:'absolute', top:20, right:-10, borderRadius:20, padding:'12px 16px',
                display:'flex', alignItems:'center', gap:10, minWidth:140 }}>
              <div style={{ width:34, height:34, borderRadius:10, background:'rgba(17,17,17,0.08)',
                display:'flex', alignItems:'center', justifyContent:'center' }}>
                <MapPin size={16} color="#111111" />
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:'0.82rem' }}>Design de Qualidade</div>
                <div style={{ fontSize:'0.7rem', color:'var(--text-muted)' }}>Maputo, MZ</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
