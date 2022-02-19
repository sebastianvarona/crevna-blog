import Layout from '../../components/layout'
import HeroCard from '../../components/hero-card'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout lang={'en'}>
            <div className="container mx-auto px-4  md:px-10">


                {/* Hero Article */}
                <HeroCard 
                    lang="en"
                    category='posts'
                    // date={heroArticle.frontmatter.date.substring(0,10).replaceAll('-', '/')}
                    date='2022/11/24'
                    // tags={heroArticle.frontmatter.stack}
                    tags='JavaScript'
                    // title={heroArticle.frontmatter.title}
                    title='Lorem ninja ipsum dolor sit ame, consectetuer adipiscing elit'
                    extract="Lorem ninja ipsum dolor sit ame, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                    // slug={heroArticle.frontmatter.slug}
                    slug='pre-rendering'
                    img={<Image src='/images/logo.png' width={100} height={100} objectFit="cover" layout='fill' />}
                    
                />
                <div className="py-4"></div>
                </div>
        </Layout>
    )
}
