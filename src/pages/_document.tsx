import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="CycleBees - Professional Bicycle Services. Expert mechanics, premium repairs, bike rentals & cycling coaching. Trusted by riders across Coimbatore." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logowhite.png" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="CycleBees - Professional Bicycle Services" />
        <meta property="og:description" content="Expert bicycle mechanics, premium repairs, bike rentals & cycling coaching. Trusted by riders across Coimbatore." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-app.webp" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CycleBees - Professional Bicycle Services" />
        <meta name="twitter:description" content="Expert bicycle mechanics, premium repairs, bike rentals & cycling coaching. Trusted by riders across Coimbatore." />
        <meta name="twitter:image" content="/hero-app.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}