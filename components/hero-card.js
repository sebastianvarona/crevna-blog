import Link from "next/link"
import Button from "./button"

export default function HeroCard({lang, date, tags, title, extract, slug, img}) {
    let slugPath = `/${slug}`
    let arrTags = tags.split('---')

    return (
        <div className="grid md:grid-cols-2 gap-12 text-primary">
            <Link href={slugPath}>
                <div className="min-h-8 aspect-16/10 rounded-lg overflow-hidden bg-border bg-center bg-cover relative cursor-pointer">
                    {img}
                    <div className="absolute top-0 left-0 w-full h-full bg-background transition-all flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60">
                        <span className="text-lg cursor-pointer hover:underline bg-primary text-background px-3 font-semibold">{lang === 'en'? 'Read more' : 'Leer más'}</span>
                    </div>
                </div>
            </Link>
            <div className="flex">
                <div className="text d-flex flex-col self-center">
                    <span className="text-xs">{date}</span>
                    <div className="tags d-flex flex-wrap mb-2">
                        {arrTags.map((tag, index) => (
                            <Link href={`/${lang === 'es' ? 'es/etiqueta' : 'tag'}/${tag.toLowerCase()}`} key={index}>
                                <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                            </Link>
                        ))}
                    </div>
                    {/* Title */}
                    <Link href={slugPath}>
                        <a className="md:hidden">
                            <h3 className="text-4xl font-semibold pb-0 hover:underline">{title}</h3>
                        </a>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-semibold pb-8 hidden md:block">{title}</h1>
                    {/* <p className="font-light pb-8">{extract}</p> */}
                    <Link href={slugPath}>
                        <a className='hidden md:block'><Button>
                            {lang === 'es' ? 'Leer artículo' : 'Read article'}
                        </Button></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

