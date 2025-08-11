import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="CycleBees - Professional bicycle mechanics at your doorstep. Repairs, rentals & coaching in one tap." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logowhite.webp" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="CycleBees - Professional Bicycle Repair" />
        <meta property="og:description" content="Professional bicycle mechanics at your doorstep. Repairs, rentals & coaching in one tap." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-app.webp" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CycleBees - Professional Bicycle Repair" />
        <meta name="twitter:description" content="Professional bicycle mechanics at your doorstep. Repairs, rentals & coaching in one tap." />
        <meta name="twitter:image" content="/hero-app.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}