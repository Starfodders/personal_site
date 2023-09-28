import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Michael Deng',
  description: 'Software Engineer Portfolio for Michael Deng',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  },
  opengraph: {
    title: 'Michael Deng',
    description: 'Software Engineer Portfolio for Michael Deng',
    image: 'https://michaeldeng.netlify.app/opengraphIMG.png',
    type: 'website',
    url: 'https://michaeldeng.netlify.app/',
    domain: 'michaeldeng.netlify.app',
    card: 'summary_large_image'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <meta property="og:title" content={metadata.opengraph.title} />
        <meta property="og:description" content={metadata.opengraph.description} />
        <meta property="og:image" content={metadata.opengraph.image} />
        <meta property="og:type" content={metadata.opengraph.type} />
        <meta property="og:url" content={metadata.opengraph.url} />
        <meta name="twitter:card" content={metadata.opengraph.card} />
        <meta property="twitter:domain" content={metadata.opengraph.domain} />
        <meta property="twitter:url" content={metadata.opengraph.url} />
        <meta name="twitter:title" content={metadata.opengraph.title} />
        <meta name="twitter:description" content={metadata.opengraph.description} />
        <meta name="twitter:image" content={metadata.opengraph.image} />
      </Head>
      {children}
    </>
  )
}
