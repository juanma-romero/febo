import './globals.css'
import Image from 'next/image';
import Link from 'next/link';
import { Ubuntu} from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Febo',
  description: 'Agencia de marketing digital - comunicando valor',
}

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: '500'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tnq8qcz.css" ></link>        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>

      <body>
        <header className='flex justify-between'>
          <Link href="/"
            className='hover:animate-spin'
          >
          <Image
            src="/FeboLogo2023.png"
            width={50}
            height={50}
            alt="Febo logo"
          />
          </Link>
          <nav>
            <ul>
              <li><Link href="/desarrolloWeb">Desarrollo Web</Link></li>
              <li><Link href="/marketingDigital">Marketing Digital</Link></li>
            </ul>
          </nav>            
        </header>
        {children}
        <footer>
        </footer>
      </body>
    </html>
  )
}
