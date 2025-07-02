// app/layout.tsx

import './globals.css'  // your global styles
import Header from './components/header'

export const metadata = {
  title: 'My App',
  description: 'Example',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
