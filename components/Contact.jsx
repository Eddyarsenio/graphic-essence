'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, Instagram, Facebook, MapPin, MessageCircle, Send } from 'lucide-react'

const contactItems = [
  { Icon:Mail,      label:'Email',       value:'cloudtv44@gmail.com',  href:'mailto:cloudtv44@gmail.com',            color:'rgba(208,21,21,0.08)',  border:'rgba(208,21,21,0.18)',  iconColor:'#D01515' },
  { Icon:Phone,     label:'WhatsApp',    value:'+258 87 677 5897',     href:'https://wa.me/258876775897',            color:'rgba(37,211,102,0.08)', border:'rgba(37,211,102,0.20)', iconColor:'#25D366' },
  { Icon:Instagram, label:'Instagram',   value:'@graphic.essence',     href:'https://instagram.com/graphic.essence', color:'rgba(236,72,153,0.08)', border:'rgba(236,72,153,0.18)', iconColor:'#EC4899' },
  { Icon:Facebook,  label:'Facebook',    value:'Graphic Essence',      href:'https://facebook.com/GraphicEssence',   color:'rgba(59,130,246,0.08)', border:'rgba(59,130,246,0.18)', iconColor:'#3B82F6' },
  { Icon:MapPin,    label:'Localização', value:'Maputo, Moçambique',   href:null,                                    color:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.20)', iconColor:'#F59E0B' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', service:'', message:'' })
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const msg = `Olá Edmilson!\n\nNome: ${form.name}\nTelefone: ${form.phone}\nServiço: ${form.service}\n\n${form.message}`
    window.open(`https://wa.me/258876775897?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  const inputStyle = {
    width:'100%', padding:'12px 14px',
    background:'rgba(255,255,255,0.7)', border:'1px solid rgba(0,0,0,0.08)',
    borderRadius:12, fontSize:'0.88rem', outline:'none', fontFamily:'inherit', color:'var(--text)',
    transition:'border-color 0.2s',
  }

  return (
    <section id="contacto" className="section">
      <div className="container">

        <div style={{ textAlign:'center', maxWidth:600, margin:'0 auto 48px' }}>
          <motion.div className="section-label" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            Contacto
          </motion.div>
          <motion.h2 className="display-lg" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} style={{ marginBottom:16 }}>
            Vamos criar algo <span className="gradient-text">incrível juntos</span>
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
            style={{ color:'var(--text-secondary)', lineHeight:1.7, fontSize:'0.95rem' }}>
            Pronto para elevar a identidade visual da sua marca? Fala comigo hoje mesmo.
          </motion.p>
        </div>

        {/* Grid — 1 coluna mobile, 2 desktop */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:24 }}
          className="md:grid-cols-2 md:gap-40"
        >

          {/* Info */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <a href="https://wa.me/258876775897" target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10, width:'100%', marginBottom:20, padding:'16px', fontSize:'0.95rem' }}>
              <MessageCircle size={18} /> Falar no WhatsApp Business
            </a>

            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {contactItems.map(({ Icon, label, value, href, color, border, iconColor }) => (
                <div key={label} className="glass-card" style={{ borderRadius:16, padding:'14px 16px', display:'flex', alignItems:'center', gap:14 }}>
                  <div style={{ width:40, height:40, borderRadius:11, background:color, border:`1px solid ${border}`,
                    display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <Icon size={17} color={iconColor} strokeWidth={1.8} />
                  </div>
                  <div style={{ minWidth:0 }}>
                    <div style={{ fontSize:'0.7rem', fontWeight:600, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:1 }}>{label}</div>
                    {href
                      ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontWeight:600, fontSize:'0.88rem', color:'var(--text)', textDecoration:'none', display:'block', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{value}</a>
                      : <span style={{ fontWeight:600, fontSize:'0.88rem' }}>{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
            className="glass-card" style={{ borderRadius:24, padding:24 }}>
            {sent ? (
              <div style={{ textAlign:'center', padding:'32px 0' }}>
                <div style={{ width:56, height:56, borderRadius:'50%', background:'rgba(37,211,102,0.10)',
                  border:'1px solid rgba(37,211,102,0.22)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
                  <MessageCircle size={24} color="#25D366" />
                </div>
                <div style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:8 }}>Mensagem enviada!</div>
                <div style={{ color:'var(--text-muted)', fontSize:'0.88rem' }}>O WhatsApp vai abrir em breve.</div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                <div style={{ fontWeight:800, fontSize:'1rem', marginBottom:4 }}>Enviar mensagem</div>

                {[
                  { name:'name',  label:'Nome completo',       placeholder:'Ex: João Silva' },
                  { name:'phone', label:'Telefone / WhatsApp', placeholder:'Ex: +258 84 000 0000' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ fontSize:'0.78rem', fontWeight:600, color:'var(--text-secondary)', display:'block', marginBottom:5 }}>{f.label}</label>
                    <input name={f.name} type="text" placeholder={f.placeholder} required value={form[f.name]} onChange={handle}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor='rgba(208,21,21,0.35)'}
                      onBlur={e  => e.target.style.borderColor='rgba(0,0,0,0.08)'} />
                  </div>
                ))}

                <div>
                  <label style={{ fontSize:'0.78rem', fontWeight:600, color:'var(--text-secondary)', display:'block', marginBottom:5 }}>Serviço de interesse</label>
                  <select name="service" value={form.service} onChange={handle} style={inputStyle}>
                    <option value="">Selecione um serviço</option>
                    {['Design Gráfico','Gestão de Redes Sociais','Edição de Vídeo','Motion Design','Branding','Gestão de Tráfego','Marketing Digital','Criativos para Anúncios','Outro'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontSize:'0.78rem', fontWeight:600, color:'var(--text-secondary)', display:'block', marginBottom:5 }}>Mensagem</label>
                  <textarea name="message" placeholder="Descreva brevemente o que precisa..." rows={3}
                    value={form.message} onChange={handle} style={{ ...inputStyle, resize:'vertical' }}
                    onFocus={e => e.target.style.borderColor='rgba(208,21,21,0.35)'}
                    onBlur={e  => e.target.style.borderColor='rgba(0,0,0,0.08)'} />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent:'center', gap:8, padding:'13px 0', fontSize:'0.9rem', display:'flex', alignItems:'center', width:'100%' }}>
                  <Send size={15} /> Enviar via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
