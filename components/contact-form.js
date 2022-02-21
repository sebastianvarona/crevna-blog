import Button from "./button"


export default function ContactForm({lang}) {
    return (
        <form className="w-full">
            <div className="flex flex-wrap mb-6 gap-4">
                <div className="md:flex-1 mb-6 md:mb-0 w-full">
                    <input className="appearance-none block w-full bg-primary text-background border rounded-lg py-3 px-4 mb-3 leading-tight" type="text" placeholder={lang === 'es' ? 'Nombre Completo' : 'Full Name'} />
                </div>
                <div className="md:flex-1 w-full">
                    <input className="appearance-none block w-full bg-primary text-background border border-border rounded-lg py-3 px-4 mb-3 leading-tight" type="email" placeholder={lang === 'es' ? 'Correo electrónico' : 'E-mail'} />
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <textarea className=" resize-y appearance-none block w-full bg-primary text-background border border-border rounded-lg py-3 px-4 mb-3 leading-tight h-56" id="message" placeholder={lang === 'es' ? 'Mensaje' : 'Message'}></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <Button>Enviar</Button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
    )
}
