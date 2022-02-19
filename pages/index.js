import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Button from '../components/button';

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
        <div className="h-screen bg-background flex">
            <div className="flex-1 h-full flex flex-col items-end justify-center">
                <h2 className="text-7xl text-right w-full text-primary font-bold mb-8">Welcome</h2>
                <Button>
                    <Link href="en">
                        <a>Continue in english</a>
                    </Link>
                </Button>
            </div>
            <div className="border border-border mx-20"></div>
            <div className="flex-1 h-full flex items-center justify-start">
                <div >
                    <h2 className="text-7xl text-center w-full text-primary font-bold mb-8">Bienvenido</h2>
                    <Button>
                        <Link href="es">
                            <a>Continuar en español</a>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
