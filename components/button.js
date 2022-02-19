export default function Button({children}) {
    return (
        <button type='button' className='rounded-md py-1 px-4 border border-primary text-primary hover:bg-primary hover:text-background focus:bg-primary focus:text-background'>
            {children}
        </button>
    )
}