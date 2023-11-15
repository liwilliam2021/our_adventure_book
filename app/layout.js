import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Our Adventure Book',
  description: 'Gift for Isabella',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type = "image/png" href='/up_icon.png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
