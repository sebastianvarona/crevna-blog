import Head from "next/head"
import Image from "next/image"
import Navbar from "./navbar"

export default function Layout({lang, children}) {
	return (
		<div className="layout min-h-screen bg-background">
            <Head>
                <title>Crevna</title>
            </Head>
			<header>
				<Navbar lang={lang} />
			</header>
			<main>
				<div className="content text-primary pt-28">
					{ children }
				</div>
			</main>
            <footer class="py-8 border-t border-border flex flex-col">    
                <img src='/images/logo-text.svg' alt="crevna" className="h-6" />
				
                <p class="text-primary text-center mt-5">
					{lang === 'es' ? 'Hecho por Sebastian Varona' : 'Crafted by Sebastian Varona'}
                </p>
            </footer>
		</div>
	)
}		