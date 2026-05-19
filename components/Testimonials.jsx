'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { text:'A Graphic Essence transformou completamente a presença visual do nosso negócio. Os criativos para as nossas campanhas são sempre modernos, atrativos e geram resultados reais.', name:'Julia Peixe',  role:'CEO — Frango JPX',      color:'rgba(239,68,68,0.08)'   },
  { text:'Trabalhar com o Edmilson foi a melhor decisão que tomámos. Os materiais de divulgação chegam sempre a tempo, com qualidade profissional e visual que encanta qualquer cliente.', name:'Odete Machava',  role:'Proprietária  — Odete Eventos', color:'rgba(139,92,246,0.08)'  },
  { text:'Desde que começámos a trabalhar com a Graphic Essence, o engagement das redes sociais aumentou muito. O design é consistente e transmite exatamente a confiança que queremos.', name:'Alzira Ngomane', role:'Roteirista — Podtech MZ', color:'rgba(16,185,129,0.08)'  },
  { text:'Profissionalismo, criatividade e entregas dentro do prazo. A Graphic Essence entende exatamente o que queremos. Altamente recomendados!',                                      name:'Naurri Gomes', role:'CEO - Fynal Mark', color:'rgba(236,72,153,0.08)'  },
  { text:'Para o nosso lançamento, a Graphic Essence criou toda a nossa identidade do zero — logo, paleta, manual de marca. Superou todas as expectativas. Qualidade de nível internacional.', name:'Julia Peixe', role:'Directora - Escolinha Madrinha JPx',        color:'rgba(59,130,246,0.08)'  },
]

function Stars() {
  return (
    <div style={{ display:'flex', gap:3, marginBottom:16 }}>
      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testemunhos" className="section">
      <div className="container">
        <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto 64px' }}>
          <motion.div className="section-label" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            Testemunhos
          </motion.div>
          <motion.h2 className="display-lg" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} style={{ marginBottom:16 }}>
            O que dizem os <span className="gradient-text">nossos clientes</span>
          </motion.h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px,1fr))', gap:20 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.2 }} transition={{ duration:0.6, delay: i * 0.08 }}
              className="testimonial-card" style={{ borderRadius:24 }}>
              <Stars />
              <p style={{ fontSize:'0.92rem', lineHeight:1.75, color:'var(--text-secondary)', marginBottom:24, fontStyle:'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                {/*
                  ══ AVATAR DO CLIENTE ════════════════════
                  Substituir por:
                  <img src="/images/avatars/nome.jpg" style={{ width:44, height:44, borderRadius:'50%', objectFit:'cover' }} />
                  ════════════════════════════════════════
                */}
                <div style={{
                  width:44, height:44, borderRadius:'50%', background:t.color,
                  border:'2px solid rgba(255,255,255,0.9)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:800, fontSize:'0.95rem', color:'var(--text)',
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:'0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize:'0.78rem', color:'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
