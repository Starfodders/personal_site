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
        <meta property="og:image" content='https://michaeldeng.netlify.app/logo.png' />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </>
  )
}
