import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss' 

export const metadata = {
  title: 'Task Apps',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
