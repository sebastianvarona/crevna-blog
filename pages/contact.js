import Head from "next/head";
import ContactForm from "../components/contact-form";
import Layout from "../components/layout"

export default function Home() {
    let lang = 'en'
    return (
        <Layout lang={lang}>
        <Head>
            <title>Crevna - Programming Articles</title>
            <meta name="description" content="If you want to contact me, please fill out this form." />
        </Head>
        <div className="container mx-auto px-4  md:px-10">
            <h1 className="text-4xl font-bold">
                {lang === 'es' ? 'Contacto' : 'Contact'}
            </h1>
            <div className="py-6"></div>
            <p className="text-xl pb-8">
                All feedback about the site is welcome. Please get in touch with me I will reply to you as soon as I can.
            </p>
            <ContactForm lang={lang} />
            <div className="pb-16"></div>
        </div>
        </Layout>
    );
}