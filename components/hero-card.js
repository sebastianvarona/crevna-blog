import Image from "next/image"
import Link from "next/link"
import Button from "./button"

export default function HeroCard({lang, date, tags, title, extract, slug, img}) {
    let slugPath = `/${slug}`
    let arrTags = tags.split('---')

    return (
        <div class="grid lg:grid-cols-2 gap-12 text-primary">
            <Link href={slugPath}>
                <div class="min-h-8 rounded-lg overflow-hidden bg-border bg-center bg-cover relative cursor-pointer">
                    {img}
                    <div class="absolute top-0 left-0 w-full h-full bg-background transition-all flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60">
                        <span class="text-lg cursor-pointer hover:underline bg-primary text-background px-3 font-semibold">{lang === 'en'? 'Read more' : 'Leer más'}</span>
                    </div>
                </div>
            </Link>
            <div class="sm:py-8">
                <div class="text d-flex flex-col">
                    <span class="text-xs">{date}</span>
                    <div class="tags d-flex flex-wrap mb-2">
                        {arrTags.map((tag, index) => (
                            <Link href={`/${lang}/${tag.toLowerCase()}`} key={index}>
                                <a className="text-accent text-sm hover:underline mr-4">{tag}</a>
                            </Link>
                        ))}
                    </div>
                    <h1 className="text-5xl font-semibold pb-8">{title}</h1>
                    <p className="font-light pb-8">{extract}</p>
                    <Link href={slugPath}>
                        <a><Button>
                            {lang === 'es' ? 'Leer más' : 'Read more'}
                        </Button></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

