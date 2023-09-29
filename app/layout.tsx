import './globals.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Michael Deng',
  description: 'Software Engineer Portfolio for Michael Deng',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Michael Deng',
    description: 'Software Engineer Portfolio for Michael Deng',
    images: [
      {
        url:'https://michaeldeng.netlify.app/opengraphIMG.png',
        width: 800,
        height: 600
      },
      {
        url:'https://michaeldeng.netlify.app/opengraphIMG.png',
        width: 1800,
        height: 1600
      }
    ],
    type: 'website',
    locale: 'en_US',
    url: 'https://michaeldeng.netlify.app/',
    siteName: 'Michael Deng'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      {children}
    </body>
    </html>
  )
}
