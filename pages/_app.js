import Script from 'next/script'
import '../styles/globals.css'
import '../styles/prism-one-dark.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
            `}
        </Script>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp
