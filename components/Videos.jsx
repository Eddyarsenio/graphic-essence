'use client'

import { motion } from 'framer-motion'
import { Play, Clock, ExternalLink } from 'lucide-react'

const videos = [
  { id:1, title:'Video de Apresentacao',    client:'PodTech MZ',     duration:'0:48', category:'Publicitário', accent:'rgba(239,68,68,0.10)',   src:'/videos/podtech.mp4', thumbnail:'/images/thumbnails/thumb1.jpg'   },
  /*{ id:2, title:'Odete Eventos — Gala de Fim de Ano',        client:'Odete Eventos',  duration:'1:20', category:'Eventos',      accent:'rgba(139,92,246,0.10)',  src:'/videos/placeholder-2.mp4', thumbnail:'/images/thumbnails/odete-eventos.jpg' },
  { id:3, title:'Reel Clínica Dental — Antes & Depois',      client:'DentalCare MZ',  duration:'0:45', category:'Saúde',        accent:'rgba(16,185,129,0.10)',  src:'/videos/placeholder-3.mp4', thumbnail:'/images/thumbnails/dental.jpg'        },
  { id:4, title:'Motion Logo — Animação de Marca',           client:'Projecto Pessoal', duration:'0:10', category:'Motion',   accent:'rgba(59,130,246,0.10)',  src:'/videos/placeholder-4.mp4', thumbnail:'/images/thumbnails/motion.jpg'        },
  { id:5, title:'Reel Restaurante — Especial do Dia',        client:'Sabor do Mar',   duration:'0:20', category:'Restaurante', accent:'rgba(245,158,11,0.10)',  src:'/videos/placeholder-5.mp4', thumbnail:'/images/thumbnails/restaurante.jpg'   },
  { id:6, title:'Campanha Salão — Transformações',           client:'Hair Studio MZ', duration:'0:35', category:'Beleza',      accent:'rgba(236,72,153,0.10)',  src:'/videos/placeholder-6.mp4', thumbnail:'/images/thumbnails/salao.jpg'         },
   */
]

export default function Videos() {
  return (
    <section id="videos" className="section">
      <div className="container">
        <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto 64px' }}>
          <motion.div className="section-label" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            Vídeos
          </motion.div>
          <motion.h2 className="display-lg" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} style={{ marginBottom:16 }}>
            Conteúdo em movimento que <span className="gradient-text">converte</span>
          </motion.h2>
          <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
            style={{ color:'var(--text-secondary)', lineHeight:1.7 }}>
            Edição profissional de reels, vídeos publicitários e motion design para marcas que querem comunicar com impacto.
          </motion.p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:20 }}>
          {videos.map((v, i) => (
            <motion.div key={v.id}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.2 }} transition={{ duration:0.6, delay: i * 0.08 }}
              className="glass-card" style={{ borderRadius:24, overflow:'hidden', cursor:'pointer' }}
              whileHover={{ scale:1.02 }}>

              {
                
                <img src={thumb1.jpg} alt={v.title}
                  style={{ width:'100%', aspectRatio:'16/10', objectFit:'cover', display:'block' }} />
                
              }
              <div style={{
                width:'100%', aspectRatio:'16/10', position:'relative',
                background: v.accent, display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                {/* Botão play */}
                <div style={{
                  width:54, height:54, borderRadius:'50%',
                  background:'rgba(255,255,255,0.92)', backdropFilter:'blur(8px)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow:'0 4px 20px rgba(0,0,0,0.12)',
                }}>
                  <Play size={22} fill="var(--text)" color="var(--text)" style={{ marginLeft:2 }} />
                </div>

                {/* Duração */}
                <div style={{ position:'absolute', bottom:10, right:10, padding:'4px 10px', borderRadius:100,
                  background:'rgba(0,0,0,0.55)', backdropFilter:'blur(8px)',
                  color:'white', fontSize:'0.75rem', fontWeight:600,
                  display:'flex', alignItems:'center', gap:5 }}>
                  <Clock size={11} /> {v.duration}
                </div>

                {/* Categoria */}
                <div style={{ position:'absolute', top:10, left:10, padding:'4px 12px', borderRadius:100,
                  background:'rgba(255,255,255,0.88)', backdropFilter:'blur(8px)',
                  fontSize:'0.72rem', fontWeight:700, color:'var(--text)' }}>
                  {v.category}
                </div>
              </div>

              <div style={{ padding:'18px 20px' }}>
                <div style={{ fontWeight:700, fontSize:'0.95rem', marginBottom:4 }}>{v.title}</div>
                <div style={{ color:'var(--text-muted)', fontSize:'0.82rem' }}>{v.client}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginTop:48 }}>
          <a href="https://instagram.com/graphic.essence" target="_blank" rel="noopener noreferrer"
            className="btn-glass" style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
            <ExternalLink size={16} /> Ver mais vídeos no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
