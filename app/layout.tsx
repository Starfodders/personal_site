import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Michael Deng',
  description: 'Software Engineer Portfolio for Michael Deng',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://michaeldeng.netlify.app/opengraphIMG.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="michaeldeng.netlify.app" />
        <meta property="twitter:url" content="https://michaeldeng.netlify.app/" />
        <meta name="twitter:title" content="Michael Deng" />
        <meta name="twitter:description" content="Software Engineer Portfolio for Michael Deng" />
        <meta name="twitter:image" content="https://michaeldeng.netlify.app/opengraphIMG.png" />
      </Head>
      {children}
    </>
  )
}
