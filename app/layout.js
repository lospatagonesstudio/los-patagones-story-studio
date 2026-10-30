import './globals.css';

const title = 'LPSS · Los Patagones Story Studio';
const description = 'Vos viajá. Nosotros contamos la historia. Edición de video, subtítulos, localización, shorts y reels, y páginas web para viajeros.';

export const metadata = {
  metadataBase: new URL('https://www.lospatagonesstorystudio.com'),
  title,
  description,
  icons: { icon: '/images/favicon.png' },
  openGraph: {
    title,
    description: 'Vos viajá. Nosotros contamos la historia.',
    type: 'website',
    locale: 'es_AR',
    images: [{ url: '/images/redes-sociales.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/images/redes-sociales.jpg'] },
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Manrope:wght@400;600&family=Caveat:wght@700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
