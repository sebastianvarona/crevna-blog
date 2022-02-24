import Head from "next/head";
import ContactForm from "../../components/contact-form";
import Layout from "../../components/layout"

export default function Home() {
    let lang = 'es'
    return (
        <Layout lang={lang}>
        <Head>
            <title>Crevna - Contacto</title>
            <meta name="description" content="Si deseas contactarme, por favor llena este formulario." />
        </Head>
        <div className="container mx-auto px-4  md:px-10">
            <h1 className="text-4xl font-bold">
                {lang === 'es' ? 'Contacto' : 'Contact'}
            </h1>
            <div className="py-6"></div>
            <p className="text-xl pb-8">
                Todos los comentarios o sugerencias sobre el sitio son totalmente bienvenidas. Por favor si tienes algo que decirme contáctame y te respondere tan rapido como pueda.
            </p>
            <ContactForm lang={lang} />
            <div className="pb-16"></div>
        </div>
        </Layout>
    );
}