import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './(components)/Common/Nav'
import AuthProvider from './(components)/Common/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Auth Tutorial',
  description: 'Tutorial for Auth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <NavBar/>
          <div className="m-2">{children}</div>
        </body>
      </AuthProvider>
    </html>
  )
}
