'use client'

import { motion } from 'framer-motion'
import { Palette, Film, Smartphone, BarChart2, Star, Sparkles, MapPin, Target, TrendingUp, Handshake } from 'lucide-react'

const skills = [
  { Icon:Palette,    label:'Design Gráfico',    color:'rgba(208,21,21,0.08)',   border:'rgba(208,21,21,0.20)'   },
  { Icon:Film,       label:'Edição de Vídeo',   color:'rgba(139,92,246,0.08)', border:'rgba(139,92,246,0.20)' },
  { Icon:Smartphone, label:'Redes Sociais',     color:'rgba(236,72,153,0.08)', border:'rgba(236,72,153,0.20)' },
  { Icon:BarChart2,  label:'Anúncios',          color:'rgba(16,185,129,0.08)', border:'rgba(16,185,129,0.20)' },
  { Icon:Star,       label:'Branding',          color:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.20)' },
  { Icon:Sparkles,   label:'Motion Design',     color:'rgba(17,17,17,0.06)',   border:'rgba(17,17,17,0.15)'   },
]

const values = [
  { Icon:Target,     title:'Criatividade com Propósito', desc:'Cada peça visual conta uma história e serve um objetivo estratégico.' },
  { Icon:TrendingUp, title:'Foco em Resultados',         desc:'Crio conteúdos que geram impacto mensurável para o seu negócio.' },
  { Icon:Handshake,  title:'Parceria a Longo Prazo',     desc:'Não sou apenas prestador de serviço — sou o parceiro criativo da sua marca.' },
]

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">

        {/* Grid — 1 coluna mobile, 2 desktop */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr',
          gap:48,
          alignItems:'center',
        }}
          className="md:grid-cols-2 md:gap-80"
        >

          {/* Card visual */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.2 }} transition={{ duration:0.8 }}>
            <div className="glass-card" style={{ borderRadius:24, padding:28, position:'relative', overflow:'hidden' }}>
              <div style={{
                position:'absolute', top:-40, right:-40, width:180, height:180, borderRadius:'50%',
                background:'radial-gradient(circle, rgba(208,21,21,0.08), transparent 70%)',
                filter:'blur(30px)', pointerEvents:'none',
              }} />

              {/*
                ══ FOTO SOBRE ══
                Substituir por:
                <img src="/images/edmilson-sobre.jpg.png" alt="Edmilson"
                  style={{ borderRadius:16, width:'100%', aspectRatio:'1', objectFit:'cover', marginBottom:20 }} />
              */}
              <img src="/images/edmilson-sobre.jpg.png" alt="Edmilson Massingue"
                style={{ borderRadius:16, width:'100%', aspectRatio:'1', objectFit:'cover', marginBottom:20 }} />

              <div style={{ fontWeight:800, fontSize:'1.1rem', letterSpacing:'-0.02em' }}>Edmilson Massingue</div>
              <div style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginTop:4, marginBottom:16 }}>
                Designer Gráfico · Editor de Vídeo · Gestor de Marketing
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {skills.map(({ Icon, label, color, border }) => (
                  <div key={label} style={{
                    padding:'5px 11px', borderRadius:100, background:color, border:`1px solid ${border}`,
                    fontSize:'0.75rem', fontWeight:600, color:'var(--text-secondary)',
                    display:'flex', alignItems:'center', gap:5,
                  }}>
                    <Icon size={12} strokeWidth={2} /> {label}
                  </div>
                ))}
              </div>

              <div style={{ marginTop:20, paddingTop:16, borderTop:'1px solid rgba(0,0,0,0.05)',
                display:'flex', alignItems:'center', gap:8 }}>
                <MapPin size={15} color="var(--text-muted)" />
                <span style={{ fontSize:'0.82rem', color:'var(--text-muted)' }}>Maputo, Moçambique</span>
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
              style={{ marginBottom:20 }}>
              A <span className="gradient-text">Graphic Essence</span> transforma marcas
            </motion.h2>
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:16, fontSize:'0.95rem' }}>
                A <strong style={{ color:'var(--text)' }}>Graphic Essence</strong> é a minha marca criativa, fundada em Maputo, Moçambique,
                com foco em transformar negócios locais em marcas visuais profissionais e memoráveis.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, marginBottom:28, fontSize:'0.95rem' }}>
                Combino design gráfico, edição de vídeo de alta qualidade e estratégias de marketing digital
                para criar conteúdos que geram resultados reais — mais atenção, mais clientes, mais vendas.
              </p>
              {values.map(({ Icon, title, desc }) => (
                <div key={title} className="glass-card"
                  style={{ display:'flex', gap:14, padding:'16px 18px', borderRadius:16, marginBottom:10 }}>
                  <div style={{ width:38, height:38, borderRadius:10, background:'rgba(208,21,21,0.08)',
                    border:'1px solid rgba(208,21,21,0.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon size={17} color="#D01515" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:'0.9rem', marginBottom:3 }}>{title}</div>
                    <div style={{ fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.6 }}>{desc}</div>
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
