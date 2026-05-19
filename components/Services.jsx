'use client'

import { motion } from 'framer-motion'
import { Palette, Smartphone, Film, Sparkles, Star, BarChart2, Megaphone, Flame } from 'lucide-react'

const services = [
  { Icon:Palette,     title:'Design Gráfico',           description:'Flyers, cartazes, banners, posts para redes sociais, e-books e muito mais. Visual que para o scroll e converte.',    color:'rgba(59,130,246,0.10)',  border:'rgba(59,130,246,0.20)',  glow:'rgba(59,130,246,0.12)',  tags:['Flyers','Cartazes','Posts','E-books'] },
  { Icon:Smartphone,  title:'Gestão de Redes Sociais',  description:'Criação e agendamento de conteúdos, estratégia visual e crescimento orgânico da sua presença online.',             color:'rgba(236,72,153,0.08)',  border:'rgba(236,72,153,0.18)',  glow:'rgba(236,72,153,0.10)',  tags:['Instagram','Facebook','TikTok','Conteúdo'] },
  { Icon:Film,        title:'Edição de Vídeo',           description:'Edição profissional de reels, vídeos publicitários, depoimentos e conteúdo para campanhas digitais.',              color:'rgba(139,92,246,0.10)',  border:'rgba(139,92,246,0.20)',  glow:'rgba(139,92,246,0.12)',  tags:['Reels','Publicidade','Depoimentos'] },
  { Icon:Sparkles,    title:'Motion Design',             description:'Animações, intros e vídeos em movimento que dão vida à sua marca e capturam a atenção imediata do público.',       color:'rgba(245,158,11,0.10)',  border:'rgba(245,158,11,0.22)',  glow:'rgba(245,158,11,0.12)',  tags:['Animações','Intros','Motion'] },
  { Icon:Star,        title:'Branding & Identidade',     description:'Criação de identidade visual completa — logo, paleta de cores, tipografia e manual de marca.',                    color:'rgba(16,185,129,0.10)',  border:'rgba(16,185,129,0.20)',  glow:'rgba(16,185,129,0.12)',  tags:['Logo','Identidade','Manual'] },
  { Icon:BarChart2,   title:'Gestão de Tráfego',         description:'Criação e gestão de campanhas pagas no Facebook Ads e Instagram Ads para atrair clientes qualificados.',          color:'rgba(239,68,68,0.08)',   border:'rgba(239,68,68,0.18)',   glow:'rgba(239,68,68,0.10)',   tags:['Facebook Ads','Instagram Ads','ROI'] },
  { Icon:Megaphone,   title:'Marketing Digital',         description:'Estratégias completas de marketing digital — conteúdo, posicionamento, funil de vendas e presença online.',       color:'rgba(59,130,246,0.08)',  border:'rgba(59,130,246,0.18)',  glow:'rgba(59,130,246,0.10)',  tags:['Estratégia','Funil','Posicionamento'] },
  { Icon:Flame,       title:'Criativos para Anúncios',   description:'Imagens e vídeos persuasivos criados especificamente para campanhas de performance e conversão.',                 color:'rgba(139,92,246,0.08)',  border:'rgba(139,92,246,0.18)',  glow:'rgba(139,92,246,0.10)',  tags:['Alta Conversão','Anúncios','Performance'] },
]

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 64px' }}>
          <motion.div className="section-label"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            O que fazemos
          </motion.div>
          <motion.h2 className="display-lg"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            style={{ marginBottom:16 }}>
            Serviços que <span className="gradient-text">elevam marcas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
            style={{ color:'var(--text-secondary)', fontSize:'1.05rem', lineHeight:1.7 }}>
            Soluções criativas completas para negócios que querem crescer com identidade visual forte e marketing eficaz.
          </motion.p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:20 }}>
          {services.map(({ Icon, title, description, color, border, glow, tags }, i) => (
            <motion.div key={title} className="glass-card"
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.2 }} transition={{ duration:0.6, delay: i * 0.07 }}
              style={{ borderRadius:24, padding:32, position:'relative', overflow:'hidden' }}
              whileHover={{ scale:1.02 }}>
              <div style={{
                position:'absolute', top:-40, right:-40, width:140, height:140, borderRadius:'50%',
                background:`radial-gradient(circle, ${glow}, transparent 70%)`,
                filter:'blur(30px)', pointerEvents:'none',
              }} />
              <div style={{
                width:52, height:52, borderRadius:14, background:color, border:`1px solid ${border}`,
                display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20,
              }}>
                <Icon size={24} strokeWidth={1.5} color={border.replace('0.20','0.9').replace('0.18','0.9').replace('0.22','0.9')} />
              </div>
              <h3 style={{ fontWeight:700, fontSize:'1.05rem', letterSpacing:'-0.015em', marginBottom:10 }}>{title}</h3>
              <p style={{ fontSize:'0.875rem', lineHeight:1.7, color:'var(--text-secondary)', marginBottom:20 }}>{description}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {tags.map(t => (
                  <span key={t} style={{ padding:'4px 10px', borderRadius:100, background:color, border:`1px solid ${border}`, fontSize:'0.72rem', fontWeight:600, color:'var(--text-secondary)' }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginTop:56 }}>
          <p style={{ color:'var(--text-muted)', marginBottom:20 }}>Precisa de algo específico? Vamos conversar.</p>
          <a href="https://wa.me/258876775897" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  )
}
