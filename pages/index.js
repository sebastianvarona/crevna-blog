import Layout from '../components/layout'
import HeroCard from '../components/hero-card'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts'
import Cards from '../components/cards'
import CardOne from '../components/card-one'
import Button from '../components/button'
import Link from 'next/link'
import Head from 'next/head'


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

    let tutorials = []
    allPostsData.forEach(tutorial => {
        if (tutorial.lang === lang && tutorial.category === 'tutorial') {
            tutorials.push(tutorial)
        }
    });

    return (
        <Layout lang={lang}>
            <Head>
                <title>Crevna - Programming Articles and Tutorials</title>
                <meta name="description" content="A blog meant for developers featuring articles and tutorials about  Full Stack development ." />
            </Head>
            <div className="container mx-auto max-w-7xl px-3 sm:px-6 lg:px-10">

                {/* Hero Article */}
                <HeroCard 
                    lang={lang}
                    category='posts'
                    date={articles[0].date.substring(0,10).replace('-', '/').replace('-', '/')}
                    tags={articles[0].tags}
                    // title={heroArticle.frontmatter.title}
                    title={articles[0].title}
                    extract="Lorem ninja ipsum dolor sit ame, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                    // slug={heroArticle.frontmatter.slug}
                    slug={articles[0].id}
                    img={<Image alt='thumbnail' src={`/images/${articles[0].img}`} width={576} height={360} objectFit="cover" priority />}
                />
                <hr className='md:hidden border-border mt-8' />


                <div className="py-4"></div>

                {/* Next Articles */}
                <Cards>
                    {articles.slice(1, 4).map(article => (
                        <>
                            <CardOne 
                                slug={article.id} 
                                key={article.id}
                                img={<Image alt='thumbnail' src={`/images/${article.img}`} width={382} height={239} objectFit="cover" />}
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
                            <hr className='md:hidden border-border' />
                        </>
                    ))}
                </Cards>
                <div className="flex justify-center mt-16">
                    <Link href="/articles">
                        <a><Button>All articles</Button></a>
                    </Link>
                </div>
            </div>

            <hr className='border-border mt-16' />

            {/* Tutorials */}
            <div className='bg-background-secondary py-16'>
                <h2 className='text-4xl font-semibold max-w-7xl mx-auto px-10 mb-8'>{lang === 'es' ? 'Tutoriales' : 'Tutorials'}</h2>
                <div className='container max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 flex gap-16'>
                    <Cards>
                        {tutorials.map(tutorial => (
                            <>
                                <CardOne 
                                    slug={tutorial.id} 
                                    key={tutorial.id}
                                    img={<Image alt='thumbnail' src={`/images/${tutorial.img}`} width={382} height={239} objectFit="cover" />}
                                >
                                    <span className="text-xs">{tutorial.date.substring(0,10).replace('-', '/').replace('-', '/') }</span>
                                    <div className="tags d-flex flex-wrap">
                                        {tutorial.tags.split('---').map((tag, index) => (
                                            <Link href={`/${lang === 'es' ? 'es/etiqueta' : 'tag'}/${tag.toLowerCase()}`} key={index}>
                                                <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href={`/${tutorial.id}`}>
                                        <a>
                                            <h3 className="text-2xl font-semibold pb-0 hover:underline">{tutorial.title}</h3>
                                        </a>
                                    </Link>
                                </CardOne>
                                <hr className='md:hidden border-border' />
                            </>
                        ))}
                    </Cards>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Link href="/tutorials">
                            <a><Button>All tutorials</Button></a>
                        </Link>
                </div>
            </div>
        </Layout>
    )
}
