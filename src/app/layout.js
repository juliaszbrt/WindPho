import './globals.css'
import Navbar from './components/navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#A8BCD3]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
