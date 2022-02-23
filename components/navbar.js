import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Navbar(props) {

    const [menuDisplay, setMenuDisplay] = useState(false)
    const [langDisplay, setLangDisplay] = useState(false)
    let links = []
    switch (props.lang) {
        case 'es':
            links = [
                { title: 'Inicio', path: '/es' },
                { title: 'Tutoriales', path: '/es/tutoriales' },
                { title: 'Artículos', path: '/es/articulos' },
                { title: 'Contacto', path: '/es/contacto' }
            ]
            break
        case 'en':
            links = [
                { title: 'Home', path: '/en' },
                { title: 'Tutorials', path: '/en/tutorials' },
                { title: 'Articles', path: '/en/articles' },
                { title: 'Contact', path: '/en/contact' }
            ]
            break
        default:
            break
    }
    const router = useRouter()

    return (
        <nav className="bg-background text-primary border-b border-border fixed top-0 left-0 w-screen shadow-md z-10">
            <div className="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Mobile menu icon */}
                    <div className="sm:hidden">
                        <button onClick={() => setMenuDisplay(!menuDisplay)} type="button" className={menuDisplay ? "p-2 text-accent" : "p-2 text-primary hover:text-accent active:text-accent"} aria-label="menu" aria-expanded="false">
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="sm:hidden">
                        <Link href={`/${props.lang}`}>
                            <img src='/images/logo.svg' alt="crevna" className="h-6"/>
                        </Link>
                    </div>
                    {/* Desktop */}
                    <div className="flex-1 hidden sm:flex min-h-full">
                        {/* Logo */}
                        <div className="logo flex items-center border-r border-border pr-5 cursor-pointer">
                            <Link href={`/${props.lang}`}>
                                <img src='/images/logo-text.svg' alt="crevna" className="h-4"/>
                            </Link>
                        </div>
                        {/* Links */}
                        <div className="flex-1 flex space-x-4 min-h-full items-center justify-center">
                        {links.map((item, index) => {
                            return (
                            <Link key={index} href={item.path}>
                                <a
                                className={`px-5 py-2 rounded-md font-semibold ${
                                    router.pathname === item.path
                                    ? 'text-accent underline underline-offset-8'
                                    : 'hover:underline hover:underline-offset-8'
                                }`}
                                >
                                {item.title}
                                </a>
                            </Link>
                            )
                        })}
                        </div>
                    </div>
                    {/* Globe */}
                    <div className="flex h-full items-center sm:border-l border-border relative">
                        <button onClick={() => setLangDisplay(!langDisplay)} className={langDisplay ? "block ml-6 p-2 text-accent" : "block ml-6 p-2 text-primary hover:text-accent active:text-accent"} aria-label="change language">
                            <svg xmlns="http://www.w3.org/2000/svg" className="lang-select-icon h-4" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"/>
                            </svg>
                        </button>
                        <div className={ langDisplay ? "flex flex-col justify-center absolute right-0 top-14 bg-border rounded-md overflow-hidden" : "hidden" }>
                            <Link href="/en"><a className="font-light hover:bg-secondary focus:bg-secondary py-2 px-12">English</a></Link>
                            <Link href="/es"><a className="font-light hover:bg-secondary focus:bg-secondary py-2 px-12">Español</a></Link>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className={menuDisplay ? "bg-background flex flex-col w-full" : "hidden"}>
                    {links.map((item, index) => {
                        return (
                        <Link key={index} href={item.path}>
                            <a
                            className={`px-5 py-2 rounded-md font-semibold ${
                                router.pathname === item.path
                                ? 'text-accent underline underline-offset-8'
                                : 'hover:underline hover:underline-offset-8'
                            }`}
                            >
                            {item.title}
                            </a>
                        </Link>
                        )
                    })}
                </div>
            </div>
        </nav>

    );
}
