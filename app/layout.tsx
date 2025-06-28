import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity & Web Development Portfolio',
  description: 'Professional portfolio showcasing cybersecurity and web development expertise',
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