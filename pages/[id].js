import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import { getAllPostIds, getSortedPostsData, getPostData  } from '../lib/posts'
import Prism from 'prismjs'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'


export async function getStaticProps({params}) {
    const postRequested = await getPostData(params.id)
    const allPostsData = getSortedPostsData()
    return {
        props: {
            postRequested,
            allPostsData
        }
    }
}

export default function Post({allPostsData, postRequested}) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    const tags = postRequested.tags.split('---')
    let lastPosts = []
    allPostsData.forEach(post => {
        if (post.lang === postRequested.lang) {
            lastPosts.push(post)
        }
    });

    return (
        <Layout lang={postRequested.lang}>
            <Head>
                <title>{postRequested.title}</title>
            </Head>
            <div className='container max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 flex gap-16'>
                <div className='md:basis-2/3'>
                    <article>
                        {/* TAGS */}
                        <div className="tags d-flex flex-wrap mb-2 font-medium">
                            {tags.map((tag, index) => (
                                <Link href={`/${postRequested.lang}/${postRequested.lang === 'es' ? 'etiqueta' : 'tag'}/${tag.toLowerCase()}`} key={index}>
                                    <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                                </Link>
                            ))}
                        </div>
                        {/* Title */}
                        <h1 className="text-4xl font-bold mb-4">{postRequested.title}</h1>
                        {/* Date */}
                        <span className='font-light text-sm text-tcolor'>{postRequested.date.replace('-','/').replace('-','/')}</span>
                        <div className='bg-border rounded-lg relative aspect-16/9 overflow-hidden mb-12 mt-4'>
                            <Image alt='thumbnail' src={`/images/${postRequested.img}`} layout='fill' objectFit='cover' />
                        </div>
                        <div>
                        <ReactMarkdown>
                            {postRequested.markdown}
                        </ReactMarkdown>
                        </div>
                        {/* <div className='text-tcolor' dangerouslySetInnerHTML={{ __html: postRequested.contentHtml }} /> */}
                    </article>
                </div>
                {/* Aside */}
                <aside className="hidden md:block flex-none basis-1/3">
                    {/* AD SPACE */}
                    <div className="h-64 bg-[#101010] rounded-lg mb-8"></div>
                    {/* END AD SPACE */}
                    <h4 className="font-bold text-xl mb-4">Latest Posts</h4>
                    <ul className='list-none'>
                        {lastPosts.slice(0,5).map((post) => (
                            <li key={post.id}>                                  
                                <div className='block mt-4'>
                                    {post.tags.split('---').map((tag, index) => (
                                        <Link href={`/${postRequested.lang}/${postRequested.lang === 'es' ? 'etiqueta' : 'tag'}/${tag.toLowerCase()}`} key={index}>
                                            <a className="text-accent text-sm hover:underline mr-2">{tag}</a>
                                        </Link>
                                    ))}
                                </div>
                                <Link href={post.id}>
                                    <a className='pb-4 block hover:underline font-medium text-xl text-gray-300 hover:text-primary'>{`${post.title}`}</a>
                                </Link>
                                <hr className='border-border' />
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
            <div className='pb-16'></div>
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

// Get Post Data only by id * import `getPostData` from lib/posts *
// export async function getStaticProps({ params }) {
//     // Add the "await" keyword like this:
//     const postData = await getPostData(params.id)
//     return {
//         props: {
//         postData
//         }
//     }
// }  
