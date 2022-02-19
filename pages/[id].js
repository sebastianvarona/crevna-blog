import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPostIds, getPostData  } from '../lib/posts'

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <span className='font-light'>{postData.date}</span>
                <h1 className="text-4xl font-bold">{postData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
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

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
        props: {
        postData
        }
    }
}  
