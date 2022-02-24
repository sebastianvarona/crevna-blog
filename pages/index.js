import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Button from '../components/button'
import Head from 'next/head'

export async function getStaticProps() {
const allPostsData = getSortedPostsData()
return {
    props: {
    allPostsData
    }
}
}

export default function Home() {
    return (
        <>
        <Head>
            <title>Crevna</title>
        </Head>
        <div className="h-screen bg-background flex md:flex-row flex-col">
            <div className="flex-1 md:h-full flex flex-col items-center md:items-end justify-center">
                <h2 className="text-center text-4xl md:text-7xl md:text-right w-full text-primary font-bold mb-8">Welcome</h2>
                <Button>
                    <Link href="en">
                        <a>Continue in english</a>
                    </Link>
                </Button>
            </div>
            <div className="border border-border mx-20"></div>
            <div className="flex-1 md:h-full flex items-center justify-start">
                <div className="flex-1 md:h-full flex flex-col items-center md:items-start justify-center">
                    <h2 className="text-4xl md:text-7xl text-center md:text-left w-full text-primary font-bold mb-8">Bienvenido</h2>
                    <Button>
                        <Link href="es">
                            <a>Continuar en español</a>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
}
