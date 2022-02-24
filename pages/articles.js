import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import CardOne from "../components/card-one"
import Cards from "../components/cards"
import Layout from "../components/layout"
import { getSortedPostsData } from '../lib/posts'

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
    let articles = []
    allPostsData.forEach(article => {
        if (article.lang === lang && article.category === 'article') {
            articles.push(article)
        }
    });
    return (
        <Layout lang={lang}>
        <Head>
            <title>Crevna - Programming Articles</title>
            <meta name="description" content="Here you will find articles about Full-Stack development." />
        </Head>
            <div className='container max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 pb-16'>
                <h1 className="text-4xl font-bold mb-16">
                    {lang === 'es'? 'Artículos' : 'Articles'}
                </h1>
                
                <Cards>
                    {articles.map(article => (
                            <CardOne 
                                slug={article.id} 
                                key={article.id}
                                img={<Image alt='thumbnail' src={`/images/${article.img}`} objectFit="cover" layout='fill' />}
                            >
                                <span className="text-xs">{article.date.substring(0,10).replace('-', '/').replace('-', '/') }</span>
                                <div className="tags d-flex flex-wrap">
                                    {article.tags.split('---').map((tag, index) => (
                                        <Link href={`/${lang === 'es' ? 'es/etiqueta' : 'tag'}/${tag.toLowerCase()}`} key={index}>
                                            <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                                        </Link>
                                    ))}
                                </div>
                                <Link href={`/${article.id}`}>
                                    <a>
                                        <h3 className="text-2xl font-semibold pb-0 hover:underline">{article.title}</h3>
                                    </a>
                                </Link>
                            </CardOne>
                    ))}
                </Cards>
            </div>
        </Layout>
    );
}