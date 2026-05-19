import './globals.css'

export const metadata = {
  title: 'Graphic Essence – Design Criativo & Marketing Digital',
  description: 'Agência criativa de design gráfico, edição de vídeo e gestão de marketing digital em Maputo, Moçambique. Transformamos marcas em experiências visuais inesquecíveis.',
  keywords: 'design gráfico, marketing digital, edição de vídeo, branding, Maputo, Moçambique, Edmilson Massingue, Graphic Essence',
  openGraph: {
    title: 'Graphic Essence – Design Criativo & Marketing Digital',
    description: 'Transformamos marcas em experiências visuais inesquecíveis.',
    locale: 'pt_MZ',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Favicon: substituir pelo logo da Graphic Essence em /public/favicon.ico */}
      </head>
      <body>{children}</body>
    </html>
  )
}
