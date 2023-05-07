import './globals.css'

export const metadata = {
  title: 'Febo',
  description: 'Agencia de marketing digital - comunicando valor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head><link rel="stylesheet" href="https://use.typekit.net/tnq8qcz.css" ></link></head>
      <body>{children}</body>
    </html>
  )
}
