# Graphic Essence — Website

Website premium para a marca **Graphic Essence** de Edmilson Massingue.

---

## 🚀 Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Executar em desenvolvimento
npm run dev

# 3. Abrir no browser
http://localhost:3000
```

---

## 📁 Estrutura de Ficheiros

```
graphic-essence/
├── app/
│   ├── globals.css          ← Design system completo (cores, glass, tipografia)
│   ├── layout.jsx           ← Layout raiz (metadata SEO)
│   └── page.jsx             ← Página principal
├── components/
│   ├── Navbar.jsx           ← Menu de navegação
│   ├── Hero.jsx             ← Secção inicial (foto + CTA)
│   ├── About.jsx            ← Sobre a marca e o Edmilson
│   ├── Services.jsx         ← Cards de serviços
│   ├── Portfolio.jsx        ← Galeria filtrável por categoria
│   ├── Videos.jsx           ← Showcase de vídeos
│   ├── Stats.jsx            ← Estatísticas e clientes
│   ├── Testimonials.jsx     ← Testemunhos de clientes
│   ├── Contact.jsx          ← Formulário + contactos
│   └── Footer.jsx           ← Rodapé
└── public/
    ├── images/
    │   ├── edmilson.jpg     ← ADICIONAR: foto do Edmilson (Hero)
    │   ├── edmilson-sobre.jpg ← ADICIONAR: foto para secção Sobre
    │   ├── thumbnails/      ← Thumbnails dos vídeos
    │   ├── restaurantes/    ← Imagens de projetos de restaurantes
    │   ├── clinicas/        ← Imagens de projetos de clínicas
    │   ├── saloes/          ← Imagens de salões
    │   ├── bolos/           ← Imagens de confeitaria
    │   ├── eventos/         ← Imagens de eventos
    │   ├── frango/          ← Imagens do Frango JPX etc.
    │   ├── flyers/          ← Imagens de flyers
    │   ├── ebooks/          ← Capas de e-books
    │   ├── branding/        ← Projetos de branding
    │   └── redes-sociais/   ← Posts para redes sociais
    ├── videos/              ← Vídeos publicitários (.mp4)
    └── logo.svg             ← ADICIONAR: logo da Graphic Essence
```

---

## 🖼️ Como adicionar imagens

### Foto do Edmilson (Hero)
Em `components/Hero.jsx`, linha ~70, substituir o `<div>` placeholder por:
```jsx
<img src="/images/edmilson.jpg" alt="Edmilson Massingue" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
```

### Logo
Em `components/Navbar.jsx` e `components/Footer.jsx`, substituir o texto `Graphic Essence` por:
```jsx
<img src="/logo.svg" alt="Graphic Essence" style={{ height: 36 }} />
```

### Imagens do portfólio
Em `components/Portfolio.jsx`, no array `items`, alterar o campo `src` de cada item:
```js
{ id:1, cat:'restaurantes', title:'...', client:'...', src:'/images/restaurantes/nome.jpg', ... }
```
E substituir o `<div>` placeholder pelo `<img>` real.

### Thumbnails de vídeos
Em `components/Videos.jsx`, no array `videos`, alterar o campo `thumbnail`:
```js
{ id:1, ..., thumbnail:'/images/thumbnails/frango-jpx.jpg', ... }
```

---

## 📞 Como alterar contactos

Todos os contactos estão centralizados em:
- `components/Contact.jsx` — array `contactItems`
- `components/Navbar.jsx` — botão WhatsApp
- `components/Footer.jsx` — secção de contacto rápido

Substituir:
- WhatsApp: `258876775897` pelo número correto
- Email: `cloudtv44@gmail.com`
- Instagram: `graphic.essence`
- Facebook: URL da página

---

## 🎨 Como editar o design

Todas as variáveis de cor e design estão em `app/globals.css`:
```css
:root {
  --bg:     #F5F7FA;   /* cor de fundo */
  --blue:   #3B82F6;   /* cor primária */
  --violet: #8B5CF6;   /* cor secundária */
  /* ... */
}
```

---

## 🌐 Deploy no Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou importar directamente no [vercel.com](https://vercel.com) a partir do repositório GitHub.

---

## 📦 Dependências principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| Next.js | 14 | Framework principal |
| Framer Motion | ^11 | Animações |
| Lucide React | ^0.383 | Ícones |
| Tailwind CSS | ^3.3 | Estilos utilitários |

---

© 2025 Graphic Essence — Edmilson Massingue, Maputo, Moçambique
