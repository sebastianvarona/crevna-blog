import Image from "next/image"
import Link from "next/link"
import Button from "./button"

export default function HeroCard({lang, date, tags, title, extract, slug, img}) {
    let slugPath = `/${slug}`

    return (
        <div class="grid lg:grid-cols-2 gap-12 text-primary">
            <Link href={slugPath}>
                <div class="min-h-8 rounded-lg overflow-hidden bg-border bg-center bg-cover relative">
                    {img}
                    <div class="absolute top-0 left-0 w-full h-full bg-background transition-all flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60">
                        <span class="text-lg hover:underline bg-primary text-background px-3 font-semibold">{lang === 'en'? 'Read more' : 'Leer más'}</span>
                    </div>
                </div>
            </Link>
            <div class="sm:py-8">
                <div class="text d-flex flex-col">
                    <span class="text-xs">{date}</span>
                    <div class="tags d-flex flex-wrap">
                        <Link href={slugPath}>
                            <a className="text-accent text-sm hover:underline">{tags}</a>
                        </Link>
                    </div>
                    <Link href={slugPath}>
                        <h1 className="text-5xl font-semibold pb-8 hover:underline">{title}</h1>
                    </Link>
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

