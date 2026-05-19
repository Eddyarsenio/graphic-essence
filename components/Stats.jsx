'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Palette, Users, Zap, Award } from 'lucide-react'

function Counter({ from, to, suffix='' }) {
  const [val, setVal] = useState(from)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold:0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let frame
    const t0 = performance.now()
    const dur = 1800
    const run = now => {
      const p = Math.min((now - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(from + (to - from) * e))
      if (p < 1) frame = requestAnimationFrame(run)
    }
    frame = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frame)
  }, [started, from, to])

  return <span ref={ref}>{val}{suffix}</span>
}

const stats = [
  { Icon:Palette, number:20, suffix:'+', label:'Projetos Concluídos',  desc:'Design a campanhas completas',       color:'rgba(59,130,246,0.10)',  border:'rgba(59,130,246,0.20)',  iconColor:'#3B82F6' },
  { Icon:Users,   number:10, suffix:'+', label:'Clientes Satisfeitos', desc:'Em Maputo e outros pontos do país',   color:'rgba(16,185,129,0.10)',  border:'rgba(16,185,129,0.20)',  iconColor:'#10B981' },
  { Icon:Zap,     number:200,suffix:'+', label:'Criativos Produzidos',  desc:'Posts, flyers, vídeos e muito mais', color:'rgba(139,92,246,0.10)',  border:'rgba(139,92,246,0.20)',  iconColor:'#8B5CF6' },
  { Icon:Award,   number:3,  suffix:'+', label:'Anos de Experiência',   desc:'Skills e resultados reais',          color:'rgba(245,158,11,0.10)',  border:'rgba(245,158,11,0.22)',  iconColor:'#F59E0B' },
]

const clients = [
  { name:'Frango JPX',     desc:'Campanhas semanais' },
  { name:'Odete Eventos',  desc:'Materiais de eventos' },
  { name:'PodTech MZ',  desc:'Identidade e posts' },
  { name:'Fynal Mark', desc:'Conteúdo mensal' },
  { name:'Escolinha Madrinha JPx',     desc:'Branding completo' },
]

export default function Stats() {
  return (
    <section id="resultados" className="section">
      <div className="container">
        <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto 64px' }}>
          <motion.div className="section-label" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            Impacto
          </motion.div>
          <motion.h2 className="display-lg" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} style={{ marginBottom:16 }}>
            Números que <span className="gradient-text">provam resultados</span>
          </motion.h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px,1fr))', gap:20, marginBottom:64 }}>
          {stats.map(({ Icon, number, suffix, label, desc, color, border, iconColor }, i) => (
            <motion.div key={label}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay: i * 0.1 }}
              className="glass-card" style={{ borderRadius:24, padding:32, textAlign:'center' }}>
              <div style={{ width:56, height:56, borderRadius:16, background:color, border:`1px solid ${border}`,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
                <Icon size={26} strokeWidth={1.5} color={iconColor} />
              </div>
              <div className="stat-number"><Counter from={0} to={number} suffix={suffix} /></div>
              <div style={{ fontWeight:700, fontSize:'0.95rem', marginTop:8, marginBottom:6 }}>{label}</div>
              <div style={{ fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.6 }}>{desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <p style={{ textAlign:'center', fontSize:'0.82rem', color:'var(--text-muted)', marginBottom:28,
            textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:600 }}>Alguns clientes</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'center' }}>
            {clients.map(c => (
              <div key={c.name} className="glass-card" style={{ padding:'12px 20px', borderRadius:100, display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'linear-gradient(135deg,#3B82F6,#8B5CF6)' }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:'0.88rem' }}>{c.name}</div>
                  <div style={{ fontSize:'0.73rem', color:'var(--text-muted)' }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
