'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const socials = [
  { Icon:Instagram,     label:'Instagram', href:'https://instagram.com/graphic.essence' },
  { Icon:Facebook,      label:'Facebook',  href:'https://facebook.com/GraphicEssence' },
  { Icon:MessageCircle, label:'WhatsApp',  href:'https://wa.me/258876775897' },
  { Icon:Mail,          label:'Email',     href:'mailto:cloudtv44@gmail.com' },
]

const navLinks = [
  { label:'Início',    href:'#hero'     },
  { label:'Sobre',     href:'#sobre'    },
  { label:'Serviços',  href:'#servicos' },
  { label:'Portfólio', href:'#portfolio'},
  { label:'Vídeos',    href:'#videos'   },
  { label:'Contacto',  href:'#contacto' },
]

const contacts = [
  { Icon:Phone,  text:'+258 87 677 5897' },
  { Icon:Mail,   text:'cloudtv44@gmail.com' },
  { Icon:MapPin, text:'Maputo, Moçambique' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background:'rgba(255,255,255,0.60)', backdropFilter:'blur(24px)',
      borderTop:'1px solid rgba(255,255,255,0.80)', position:'relative', zIndex:1 }}>
      <div className="container" style={{ padding:'64px 24px 32px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:48, marginBottom:56 }}>

          {/* Brand */}
          <div>
            <div style={{
              fontWeight:800, fontSize:'1.4rem', letterSpacing:'-0.025em',
              background:'linear-gradient(135deg,#3B82F6,#8B5CF6)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
              backgroundClip:'text', marginBottom:16,
            }}>Graphic Essence</div>
            <p style={{ color:'var(--text-muted)', fontSize:'0.88rem', lineHeight:1.7, maxWidth:280, marginBottom:24 }}>
              Design criativo, edição de vídeo e marketing digital para marcas que querem crescer com identidade forte em Moçambique.
            </p>
            <div style={{ display:'flex', gap:10 }}>
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  title={label} className="social-link" aria-label={label}>
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontWeight:700, fontSize:'0.82rem', color:'var(--text)', marginBottom:16,
              textTransform:'uppercase', letterSpacing:'0.08em' }}>Navegação</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href}
                  style={{ color:'var(--text-muted)', fontSize:'0.88rem', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--blue)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <div style={{ fontWeight:700, fontSize:'0.82rem', color:'var(--text)', marginBottom:16,
              textTransform:'uppercase', letterSpacing:'0.08em' }}>Contacto rápido</div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {contacts.map(({ Icon, text }) => (
                <div key={text} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <Icon size={15} color="var(--text-muted)" strokeWidth={1.8} />
                  <span style={{ color:'var(--text-muted)', fontSize:'0.85rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop:24, borderTop:'1px solid rgba(0,0,0,0.06)',
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <span style={{ color:'var(--text-muted)', fontSize:'0.82rem' }}>
            © {year} Graphic Essence. Todos os direitos reservados.
          </span>
          <span style={{ color:'var(--text-muted)', fontSize:'0.82rem' }}>
            Feito com dedicação em Maputo, Moçambique
          </span>
        </div>
      </div>
    </footer>
  )
}
