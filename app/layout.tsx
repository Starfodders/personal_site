import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Michael Deng',
  description: 'Software Engineer Portfolio for Michael Deng',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content= 'Michael Deng' />
        <meta property="og:description" content= 'Software Engineer 2023 Portfolio for Michael Deng' />
        <meta property="og:image" content='/logo.png' /> 
        <meta property="og:type" content="website" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
