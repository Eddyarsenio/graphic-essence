'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/*
  ── PORTFÓLIO ─────────────────────────────────────────────────────────────
  Para adicionar imagens reais:
  1. Coloque as imagens nas pastas correspondentes em /public/images/
  2. Substitua os objetos abaixo, alterando:
       src: '/images/restaurantes/nome-do-ficheiro.jpg'
       title: 'Nome do Projeto'
       client: 'Nome do Cliente'
  3. A pasta de cada categoria está indicada no campo "folder"
  ──────────────────────────────────────────────────────────────────────────
*/

const categories = [
  { id: 'todos',          label: 'Todos'              },
  { id: 'restaurantes',   label: 'Restaurantes'        },
  { id: 'clinicas',       label: 'Clínicas Dentárias'  },
  { id: 'saloes',         label: 'Salões de Beleza'    },
  { id: 'bolos',          label: 'Bolos & Confeitaria' },
  { id: 'convites',        label: 'Convites Digitais'  },
  { id: 'frango',         label: 'Frango & Fast Food'  },
  { id: 'flyers',         label: 'Flyers'              },
]

// Placeholder items — substituir src e textos pelos reais
const items = [
  // Restaurantes — pasta: /public/images/restaurantes/
  { id:1,  cat:'restaurantes',  title:'Combos Post',         client:'AMASUSHI',      src:'/images/restaurantes/combinados.png',  accent:'rgba(239,68,68,0.12)'  },
  { id:2,  cat:'restaurantes',  title:'Story de Abertura',   client:'AMASUSHI',    src:'/images/restaurantes/sushi1.png', accent:'rgba(239,68,68,0.12)'  },
  { id:3,  cat:'restaurantes',  title:'Pizza Promo',       client:'Sabores da Terra',  src:'/images/restaurantes/pizza1.png', accent:'rgba(239,68,68,0.12)'  },
  { id:4,  cat:'restaurantes',  title:'Pizza Story',         client:'Pizzaria Faustino',      src:'/images/restaurantes/pizza3.png',  accent:'rgba(239,68,68,0.12)'  },
  { id:5,  cat:'restaurantes',  title:'Desconto 20%',   client:'AMASUSHI',    src:'/images/restaurantes/japon2.png', accent:'rgba(239,68,68,0.12)'  },
  { id:6,  cat:'restaurantes',  title:'Sushi Story',       client:'Sabores da Terra',  src:'/images/restaurantes/sushi2.png', accent:'rgba(239,68,68,0.12)'  },
  { id:7,  cat:'restaurantes',  title:'Sushi Post',         client:'Sabor do Mar',      src:'/images/restaurantes/japon.png',  accent:'rgba(239,68,68,0.12)'  },
  { id:8,  cat:'restaurantes',  title:'Dia da Pizza',   client:'Pizza hood',    src:'/images/restaurantes/pizza2.png', accent:'rgba(239,68,68,0.12)'  },
  { id:9,  cat:'restaurantes',  title:'Combos Story',       client:'Japasushi',  src:'/images/restaurantes/sushicombo.png', accent:'rgba(239,68,68,0.12)'  },

  // Clínicas — pasta: /public/images/clinicas/
  { id:10,  cat:'clinicas',      title:'Servicos oferecidos',    client:'Clínica FAUGET', src:'/images/clinicas/dentist.png',     accent:'rgba(16,185,129,0.12)' },
  { id:11,  cat:'clinicas',      title:'Post Instagram',       client:'Clínica FAUGET',         src:'/images/clinicas/de4.png',    accent:'rgba(16,185,129,0.12)' },
  { id:12,  cat:'clinicas',      title:'Manuntencao em dia?',    client:'Clínica FAUGET', src:'/images/clinicas/dentist2.png',     accent:'rgba(16,185,129,0.12)' },
  { id:13,  cat:'clinicas',      title:'Clareamento (Antes e depois)',       client:'Clínica FAUGET',         src:'/images/clinicas/dentist3.png',    accent:'rgba(16,185,129,0.12)' },
   { id:14,  cat:'clinicas',      title:'Post educativo instagram',       client:'Clínica FAUGET',         src:'/images/clinicas/odonto.png',    accent:'rgba(16,185,129,0.12)' },


  // Salões — pasta: /public/images/saloes/
  { id:15,  cat:'saloes',        title:'Abertura',    client:'Beleza & Estilo',    src:'/images/saloes/barbb1.png',       accent:'rgba(236,72,153,0.12)' },
  { id:16,  cat:'saloes',        title:'Card de Serviços',     client:'Rimberio Salon',     src:'/images/saloes/sal1.png',      accent:'rgba(236,72,153,0.12)' },
  { id:17,  cat:'saloes',        title:'Card de Serviços',    client:'Lorana Makeup',    src:'/images/saloes/make1.png',       accent:'rgba(236,72,153,0.12)' },
  { id:18,  cat:'saloes',        title:'Card de Serviços',     client:'Olivias Nail Salon',     src:'/images/saloes/nail1.png',      accent:'rgba(236,72,153,0.12)' },

  // Bolos — pasta: /public/images/bolos/
  { id:19,  cat:'bolos',         title:'Cardápio Especial',    client:'Mizzys Cakes',      src:'/images/bolos/bolo2.png',        accent:'rgba(245,158,11,0.12)' },
  { id:20,  cat:'bolos',         title:'Post Bolo no Pote',    client:'Doces da mell',      src:'/images/bolos/bolo1.png',        accent:'rgba(245,158,11,0.12)' },
  { id:21,  cat:'bolos',         title:'Encomendas',    client:'Milla Bolos',      src:'/images/bolos/bolo3.png',        accent:'rgba(245,158,11,0.12)' },



  // Convites — pasta: /public/images/eventos/
   { id:22,  cat:'convites',       title:'Convite de Casamento simples',           client:'Beatriz e Elidio',      src:'/images/convites/conv1.png',      accent:'rgba(139,92,246,0.12)' },
  { id:23, cat:'convites',       title:'Convite de Casamento interativo',   client:'Mauro e Luisa',   src:'/images/convites/conv2.png',     accent:'rgba(139,92,246,0.12)' },
   { id:24,  cat:'convites',       title:'Convite de Casamento interativo',           client:'Bruno e Neidy',      src:'/images/convites/conv3.png',      accent:'rgba(139,92,246,0.12)' },
  { id:25, cat:'convites',       title:'Convite para festa de Graduacao',   client:'Carla Dias',   src:'/images/convites/conv4.png',     accent:'rgba(139,92,246,0.12)' },
   { id:26,  cat:'convites',       title:'Menu casamento',           client:'Bruno e Neidy',      src:'/images/convites/menu1.png',      accent:'rgba(139,92,246,0.12)' },
  { id:27, cat:'convites',       title:'Post para anuncios',   client:'Graphic Essence',   src:'/images/convites/promo1.png',     accent:'rgba(139,92,246,0.12)' },


  // Frango — pasta: /public/images/frango/
  { id:28, cat:'frango',        title:'Frangos Frescos',     client:'Frango JPX',         src:'/images/frango/frango1.png',       accent:'rgba(239,68,68,0.12)'  },
  { id:29, cat:'frango',        title:' Logo Frangos JPx', client:'Frango JPX',       src:'/images/frango/frango2.png',      accent:'rgba(239,68,68,0.12)'  },
  { id:30, cat:'frango',        title:'Post Instagram',     client:'Chicken spot',         src:'/images/frango/frango3.png',       accent:'rgba(239,68,68,0.12)'  },
  { id:31, cat:'frango',        title:'Story/WhatsApp', client:'Chicken spot',       src:'/images/frango/frango4.png',      accent:'rgba(239,68,68,0.12)'  },

  // Flyers — pasta: /public/images/flyers/
  { id:32, cat:'flyers',        title:'Banner Ecommerce store',       client:'Fynal Mark',    src:'/images/flyers/banner1.png',       accent:'rgba(59,130,246,0.12)' },
  { id:33, cat:'flyers',        title:'Flyer Eventos',         client:'Odete Eventos',    src:'/images/flyers/evento1.png',      accent:'rgba(59,130,246,0.12)' },
  { id:34, cat:'flyers',        title:'Logotipo',       client:'Pangono Pangono Tinfika',    src:'/images/flyers/logo1.png',       accent:'rgba(59,130,246,0.12)' },
  { id:35, cat:'flyers',        title:'Logotipo Escolinha',         client:'Escolinha Madrinha JPx',    src:'/images/flyers/logo2.png',      accent:'rgba(59,130,246,0.12)' },
  { id:36, cat:'flyers',        title:'Menu Escolinha',       client:'Escolinha Madrinha JPx',    src:'/images/flyers/menuesc1.png',       accent:'rgba(59,130,246,0.12)' },
  { id:37, cat:'flyers',        title:'Precario produtos',         client:'AGRO-ARSEJA',    src:'/images/flyers/precario.png',      accent:'rgba(59,130,246,0.12)' },
  { id:38, cat:'flyers',        title:'Cartao de Visita',         client:'Pangono Pangono Tinfika',    src:'/images/flyers/card1.png',      accent:'rgba(59,130,246,0.12)' },



]

export default function Portfolio() {
  const [active, setActive] = useState('todos')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'todos' ? items : items.filter(i => i.cat === active)

  return (
    <section id="portfolio" className="section">
      <div className="container">

        {/* ── Header ──────────────────────────────── */}
        <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 48px' }}>
          <motion.div className="section-label" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            ✦ Portfólio
          </motion.div>
          <motion.h2 className="display-lg" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} style={{ marginBottom:16 }}>
            Trabalhos que <span className="gradient-text">falam por si</span>
          </motion.h2>
        </div>

        {/* ── Filter Pills ─────────────────────────── */}
        <motion.div
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:48 }}
        >
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`filter-pill ${active === c.id ? 'active' : ''}`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ────────────────────────────────── */}
        <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:20 }}>
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity:0, scale:0.9 }}
                animate={{ opacity:1, scale:1 }}
                exit={{ opacity:0, scale:0.9 }}
                transition={{ duration:0.35 }}
                onClick={() => setSelected(item)}
                style={{
                  borderRadius:20, overflow:'hidden', aspectRatio:'4/3',
                  position:'relative', cursor:'pointer',
                  background: item.accent,
                  border:'1px solid rgba(255,255,255,0.9)',
                  boxShadow:'0 4px 20px rgba(0,0,0,0.05)',
                }}
                whileHover={{ scale:1.03, boxShadow:'0 16px 40px rgba(0,0,0,0.12)' }}
              >
                {
                  <img src={item.src} alt={item.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                }
                

                {/* Overlay */}
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 55%)',
                  display:'flex', alignItems:'flex-end', padding:20,
                }}>
                  <div>
                    <div style={{ color:'white', fontWeight:700, fontSize:'0.95rem' }}>{item.title}</div>
                    <div style={{ color:'rgba(255,255,255,0.7)', fontSize:'0.8rem' }}>{item.client}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Modal Preview ────────────────────────── */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              onClick={() => setSelected(null)}
              style={{
                position:'fixed', inset:0, zIndex:200,
                background:'rgba(15,23,42,0.6)',
                backdropFilter:'blur(12px)', display:'flex', alignItems:'center', justifyContent:'center',
                padding:24,
              }}
            >
              <motion.div
                initial={{ scale:0.85, opacity:0 }}
                animate={{ scale:1, opacity:1 }}
                exit={{ scale:0.85, opacity:0 }}
                transition={{ type:'spring', stiffness:300, damping:28 }}
                onClick={e => e.stopPropagation()}
                className="glass-card"
                style={{
                  borderRadius:28, overflow:'hidden',
                  maxWidth:560, width:'100%',
                }}
              >
                <div style={{
                  width:'100%', aspectRatio:'16/10',
                  background: selected.accent,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:64,
                }}>
                  { <img src={selected.src} /> }
                </div>
                <div style={{ padding:'24px 28px 28px' }}>
                  <div style={{ fontWeight:800, fontSize:'1.2rem', letterSpacing:'-0.02em', marginBottom:6 }}>{selected.title}</div>
                  <div style={{ color:'var(--text-muted)', fontSize:'0.88rem', marginBottom:20 }}>Cliente: {selected.client}</div>
                  <div style={{ display:'flex', gap:10 }}>
                    <button onClick={() => setSelected(null)} className="btn-glass" style={{ flex:1, justifyContent:'center' }}>
                      Fechar
                    </button>
                    <a href="https://wa.me/258876758971" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex:1, justifyContent:'center', textAlign:'center' }}>
                      Quero algo similar
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
