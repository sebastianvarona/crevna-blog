import Button from "./button"


export default function ContactForm({lang}) {
    return (
        <form class="w-full">
            <div class="flex flex-wrap mb-6 gap-4">
                <div class="md:flex-1 mb-6 md:mb-0 w-full">
                    <input class="appearance-none block w-full bg-primary text-background border rounded-lg py-3 px-4 mb-3 leading-tight" type="text" placeholder={lang === 'es' ? 'Nombre Completo' : 'Full Name'} />
                </div>
                <div class="md:flex-1 w-full">
                    <input class="appearance-none block w-full bg-primary text-background border border-border rounded-lg py-3 px-4 mb-3 leading-tight" type="email" placeholder={lang === 'es' ? 'Correo electrónico' : 'E-mail'} />
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full">
                    <textarea class=" resize-y appearance-none block w-full bg-primary text-background border border-border rounded-lg py-3 px-4 mb-3 leading-tight h-56" id="message" placeholder={lang === 'es' ? 'Mensaje' : 'Message'}></textarea>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                    <Button>Enviar</Button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>
    )
}
