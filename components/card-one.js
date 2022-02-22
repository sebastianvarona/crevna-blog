import Link from "next/link"


export default function CardOne({lang, slug, img, children}) {
    let slugPath = `/${slug}`

    return (
        <div>
            <Link href={slugPath}>
                <div className="aspect-16/10 rounded-lg overflow-hidden bg-border bg-center bg-cover relative cursor-pointer">
                    {img}
                    <div className="absolute top-0 left-0 w-full h-full bg-background transition-all flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60">
                        <span className="cursor-pointer text-lg hover:underline bg-primary text-background px-3 font-semibold">{lang === 'en'? 'Read more' : 'Leer más'}</span>
                    </div>
                </div>
            </Link>
            
            <div>
                {children}
            </div>
        </div>
    )
}