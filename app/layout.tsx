// app/layout.tsx

// app/layout.tsx

import './globals.css'  // your global styles
import Header from './components/Navigation'

export const metadata = {
  title: 'Marla Tumenjargal',
  description: 'Example',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}