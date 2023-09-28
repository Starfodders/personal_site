import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
