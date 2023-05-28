import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel='shortcut icon' href='/favicon.ico'/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Arya&family=Coda&family=Courgette&family=Denk+One&family=Farsan&family=Gemunu+Libre:wght@500&family=Kdam+Thmor+Pro&family=Kite+One&family=Kotta+One&family=Lemonada:wght@300;600&family=Merienda:wght@400;700&family=Noto+Color+Emoji&family=Nova+Square&family=Saira+Extra+Condensed&family=Saira+Semi+Condensed&family=Truculenta:wght@500&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
