import Button from "../../components/Button";
import ContactForm from "../../components/contact-form";
import Layout from "../../components/Layout"

export default function Home() {
    let lang = 'en'
    return (
        <Layout lang={lang}>
        <div className="container mx-auto px-4  md:px-10">
            <h1 className="text-4xl font-bold">
                {lang === 'es' ? 'Contacto' : 'Contact'}
            </h1>
            <div className="py-6"></div>
            <p class="text-xl pb-8">
                All feedback about the site is welcome. Please get in touch with me I will reply to you as soon as I can.
            </p>
            <ContactForm lang={lang} />
            <div className="pb-16"></div>
        </div>
        </Layout>
    );
}