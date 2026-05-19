'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

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
    const onMove = e => {
      const rect = el.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top  - rect.height / 2)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero" ref={ref} className="section" style={{ minHeight:'100vh', display:'flex', alignItems:'center', paddingTop:100 }}>
      <div className="container" style={{ width:'100%' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>

          {/* ── Text Side ──────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
              className="section-label"
              style={{ marginBottom:28 }}
            >
               Design & Marketing Digital
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="display-xl"
              initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
            >
              Criando {' '}
              <span className="gradient-text">experiências</span>
              {' '}visuais que{' '}
              <em style={{ fontStyle:'normal', color:'var(--violet)' }}>vendem</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
              style={{
                fontSize:'1.1rem', lineHeight:1.7, color:'var(--text-secondary)',
                maxWidth:480, marginTop:24, marginBottom:40,
              }}
            >
              Design gráfico, edição de vídeo e gestão de marketing digital para marcas que querem destacar-se em Moçambique e além.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}
              style={{ display:'flex', gap:14, flexWrap:'wrap' }}
            >
              <a href="#portfolio" className="btn-primary">
                Ver Portfólio →
              </a>
              {/* ── Substituir o número do WhatsApp aqui ── */}
              <a href="https://wa.me/258876758971" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                💬 Falar no WhatsApp
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.5 }}
              style={{ display:'flex', gap:28, marginTop:52, paddingTop:40, borderTop:'1px solid rgba(0,0,0,0.06)' }}
            >
              {[['+50','Projetos'], ['+20','Clientes'], ['+3','Anos']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontWeight:800, fontSize:'1.5rem', letterSpacing:'-0.03em', color:'var(--blue)' }}>{n}</div>
                  <div style={{ fontSize:'0.82rem', color:'var(--text-muted)', marginTop:2 }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Visual Side ────────────────────────── */}
          <motion.div
            initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.9, delay:0.2 }}
            style={{ position:'relative', display:'flex', justifyContent:'center' }}
          >
            {/* Glow behind photo */}
            <motion.div
              style={{
                position:'absolute', width:340, height:340, borderRadius:'50%',
                background:'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.08) 60%, transparent 100%)',
                filter:'blur(40px)',
                x: glowX, y: glowY,
                top:'50%', left:'50%', transform:'translate(-50%,-50%)',
              }}
            />

            {/* Photo card */}
            <motion.div
              animate={{ y:[0,-12,0] }}
              transition={{ duration:5, repeat:Infinity, ease:'easeInOut' }}
              className="glass-card"
              style={{
                borderRadius: 28,
                overflow:'hidden',
                width:340, height:400,
                position:'relative',
              }}
            >
             <img
  src="/images/logoge.png"
  alt="Edmilson Massingue"
  style={{ width:'100%', height:'100%', objectFit:'cover' }}
/>
            </motion.div>

            {/* Floating badge 1 */}
            <motion.div
              animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:1 }}
              className="glass-card"
              style={{
                position:'absolute', bottom:60, left:-30,
                borderRadius:20, padding:'14px 18px',
                display:'flex', alignItems:'center', gap:12,
                minWidth:170,
              }}
            >
              <div style={{ width:36, height:36, borderRadius:10, background:'rgba(59,130,246,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>🎯</div>
              <div>
                <div style={{ fontWeight:700, fontSize:'0.85rem' }}>Marketing Digital</div>
                <div style={{ fontSize:'0.73rem', color:'var(--text-muted)' }}>Resultados Reais</div>
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut', delay:0.5 }}
              className="glass-card"
              style={{
                position:'absolute', top:30, right:-20,
                borderRadius:20, padding:'14px 18px',
                display:'flex', alignItems:'center', gap:12,
                minWidth:150,
              }}
            >
              <div style={{ width:36, height:36, borderRadius:10, background:'rgba(139,92,246,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>⚡</div>
              <div>
                <div style={{ fontWeight:700, fontSize:'0.85rem' }}>Design de Qualidade</div>
                <div style={{ fontSize:'0.73rem', color:'var(--text-muted)' }}>Maputo, MZ</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
