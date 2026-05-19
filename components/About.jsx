'use client'

import { motion } from 'framer-motion'
import { Palette, Film, Smartphone, BarChart2, Star, Sparkles, MapPin, Target, TrendingUp, Handshake } from 'lucide-react'

const skills = [
  { Icon:Palette,    label:'Design Gráfico',      color:'rgba(59,130,246,0.10)',  border:'rgba(59,130,246,0.25)'  },
  { Icon:Film,       label:'Edição de Vídeo',      color:'rgba(139,92,246,0.10)', border:'rgba(139,92,246,0.25)' },
  { Icon:Smartphone, label:'Redes Sociais',        color:'rgba(236,72,153,0.08)', border:'rgba(236,72,153,0.22)' },
  { Icon:BarChart2,  label:'Gestão de Anúncios',   color:'rgba(16,185,129,0.08)', border:'rgba(16,185,129,0.22)' },
  { Icon:Star,       label:'Branding',             color:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.22)' },
  { Icon:Sparkles,   label:'Motion Design',        color:'rgba(239,68,68,0.08)',  border:'rgba(239,68,68,0.22)'  },
]

const values = [
  { Icon:Target,     title:'Criatividade com Propósito', desc:'Cada peça visual conta uma história e serve um objetivo estratégico.' },
  { Icon:TrendingUp, title:'Foco em Resultados',         desc:'Crio conteúdos que geram impacto mensurável para o seu negócio.' },
  { Icon:Handshake,  title:'Parceria a Longo Prazo',     desc:'Não sou apenas um prestador de serviço — sou o parceiro criativo da sua marca.' },
]

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>

          {/* Card visual */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, amount:0.3 }} transition={{ duration:0.8 }}>
            <div className="glass-card" style={{ borderRadius:28, padding:40, position:'relative', overflow:'hidden' }}>
              <div style={{
                position:'absolute', top:-60, right:-60, width:220, height:220, borderRadius:'50%',
                background:'radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)',
                filter:'blur(40px)', pointerEvents:'none',
              }} />

              {
                <img
                  src="/images/edmilson.jpg.png"
                  alt="Edmilson Massingue"
                  style={{ borderRadius:20, width:'100%', aspectRatio:'1', objectFit:'cover', marginBottom:24 }}
                />
                
              }
              

              <div style={{ fontWeight:800, fontSize:'1.2rem', letterSpacing:'-0.02em' }}>Edmilson Massingue</div>
              <div style={{ color:'var(--text-muted)', fontSize:'0.88rem', marginTop:4, marginBottom:20 }}>
                Designer Gráfico · Editor de Vídeo · Gestor de Marketing
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {skills.map(({ Icon, label, color, border }) => (
                  <div key={label} style={{
                    padding:'6px 12px', borderRadius:100, background:color, border:`1px solid ${border}`,
                    fontSize:'0.78rem', fontWeight:600, color:'var(--text-secondary)',
                    display:'flex', alignItems:'center', gap:6,
                  }}>
                    <Icon size={13} strokeWidth={2} /> {label}
                  </div>
                ))}
              </div>

              <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid rgba(0,0,0,0.05)',
                display:'flex', alignItems:'center', gap:8 }}>
                <MapPin size={16} color="var(--text-muted)" />
                <span style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>Maputo, Moçambique</span>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.div className="section-label"
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              Sobre
            </motion.div>
            <motion.h2 className="display-lg"
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              style={{ marginBottom:24 }}>
              A <span className="gradient-text">Graphic Essence</span> transforma marcas
            </motion.h2>
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:20 }}>
                A <strong style={{ color:'var(--text)' }}>Graphic Essence</strong> é uma marca criativa fundada em Maputo, Moçambique,
                com foco em transformar negócios locais em marcas visuais profissionais e memoráveis.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:32 }}>
                Liderada por <strong style={{ color:'var(--text)' }}>Edmilson Massingue</strong>, combino design gráfico,
                edição de vídeo de alta qualidade e estratégias de marketing digital para criar criativos que geram resultados reais.
              </p>
              {values.map(({ Icon, title, desc }) => (
                <div key={title} className="glass-card"
                  style={{ display:'flex', gap:16, padding:'20px 22px', borderRadius:18, marginBottom:12 }}>
                  <div style={{ width:40, height:40, borderRadius:12, background:'rgba(59,130,246,0.08)',
                    border:'1px solid rgba(59,130,246,0.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon size={18} color="#3B82F6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:'0.95rem', marginBottom:4 }}>{title}</div>
                    <div style={{ fontSize:'0.85rem', color:'var(--text-muted)', lineHeight:1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
