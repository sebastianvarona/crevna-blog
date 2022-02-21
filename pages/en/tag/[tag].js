import { useRouter } from 'next/router'
import { getSortedPostsData, getAllPostTags } from '../../../lib/posts'
import Image from "next/image"
import Link from "next/link"
import CardOne from "../../../components/card-one"
import Cards from "../../../components/cards"
import Layout from "../../../components/Layout"
import Head from 'next/head'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
        	allPostsData
        }
    }
}

export default function Home({allPostsData}) {
	const lang = 'en'
    const router = useRouter()
    const {tag} = router.query
    let posts = []
    allPostsData.forEach(post => {
    	let postTags = post.tags.split('---')
        for (let i = 0; i < postTags.length; i++) {
            const tempTag = postTags[i];
            if (tempTag.toLowerCase() === tag.toLocaleLowerCase() && lang === post.lang){
                posts.push(post)
                break
            }
        }
    })

    return (
        <Layout lang={lang}>
            <Head>
                <title>{lang === 'es' ? 'Etiqueta' : 'Tag'} - {`${tag.charAt(0).toUpperCase() + tag.slice(1)}`}</title>
            </Head>
            <div className='container max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 pb-16'>
                <h1 className="text-4xl font-bold mb-16">
                    {`${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
                </h1>
                
                <Cards>
                    {posts.map(post => (
                            <CardOne 
                                slug={post.id} 
                                key={post.id}
                                img={<Image alt='thumbnail' src={`/images/${post.img}`} objectFit="cover" layout='fill' />}
                            >
                                <span class="text-xs">{post.date.substring(0,10).replace('-', '/').replace('-', '/') }</span>
                                <div class="tags d-flex flex-wrap">
                                    {post.tags.split('---').map((tag, index) => (
                                        <Link href={`/${lang}/${lang === 'es' ? 'etiqueta' : 'tag'}/${tag.toLowerCase()}`} key={index}>
                                            <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                                        </Link>
                                    ))}
                                </div>
                                <Link href={post.id}>
                                    <a>
                                        <h3 class="text-2xl font-semibold pb-0 hover:underline">{post.title}</h3>
                                    </a>
                                </Link>
                            </CardOne>
                    ))}
                </Cards>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for tag
    const paths = getAllPostTags()
    return {
        paths,
        fallback: false
    }
}