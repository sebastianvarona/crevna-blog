import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import CardOne from "../../components/card-one";
import Cards from "../../components/cards";
import Layout from "../../components/Layout"
import { getSortedPostsData } from '../../lib/posts'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
        allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    const lang = 'en'
    let tutorials = []
    allPostsData.forEach(tutorial => {
        if (tutorial.lang === lang && tutorial.category === 'tutorial') {
            tutorials.push(tutorial)
        }
    });
    return (
        <Layout lang={lang}>
            <div className='container max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 pb-16'>
                <h1 className="text-4xl font-bold mb-16">
                    {lang === 'es'? `Tutoriales` : `Tutorials`}
                </h1>
                
                <Cards>
                    {tutorials.map(tutorial => (
                            <CardOne 
                                slug={tutorial.id} 
                                key={tutorial.id}
                                img={<Image src={`/images/${tutorial.img}`} objectFit="cover" layout='fill' />}
                            >
                                <span class="text-xs">{tutorial.date.substring(0,10).replace('-', '/').replace('-', '/') }</span>
                                <div class="tags d-flex flex-wrap">
                                    {tutorial.tags.split('---').map((tag, index) => (
                                        <Link href={`/${lang}/${tag.toLowerCase()}`} key={index}>
                                            <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                                        </Link>
                                    ))}
                                </div>
                                <Link href={tutorial.id}>
                                    <a>
                                        <h3 class="text-2xl font-semibold pb-0 hover:underline">{tutorial.title}</h3>
                                    </a>
                                </Link>
                            </CardOne>
                    ))}
                </Cards>
            </div>
        </Layout>
    );
}