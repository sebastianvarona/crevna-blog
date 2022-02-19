import Link from "next/link"


export default function CardOne({lang, category, slug, img, children}) {
    let slugPath = `/${lang}/${category}/${slug}`

    return (
        <div>
            <Link href={slugPath}>
                <div class="aspect-16/10 rounded-lg overflow-hidden bg-border bg-center bg-cover relative">
                    {img}
                    <div class="absolute top-0 left-0 w-full h-full bg-background transition-all flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60">
                        <span class="text-lg hover:underline bg-primary text-background px-3 font-semibold">{lang === 'en'? 'Read more' : 'Leer más'}</span>
                    </div>
                </div>
            </Link>
            
            <div>
                {children}
            </div>
        </div>
    )
}