export default function Cards({children}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {children}
        </div>
    )
}