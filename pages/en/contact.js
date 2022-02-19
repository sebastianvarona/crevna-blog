import Button from "../../components/Button";
import Layout from "../../components/Layout"

export default function Home() {
    return (
        <Layout lang='en'>
        <div className="container mx-auto px-4  md:px-10">
            <h1 className="text-4xl font-bold">
                Contact!
            </h1>
            <div className="py-6"></div>
            <p class="text-xl pb-8">
                All feedback about the site is welcome. Please get in touch with me I will reply to you as soon as I can.
            </p>

            <form class="w-full">
                <div class="flex flex-wrap mb-6 gap-4">
                    <div class="md:flex-1 mb-6 md:mb-0 w-full">
                        <input class="appearance-none block w-full bg-primary text-background border rounded-lg py-3 px-4 mb-3 leading-tight" type="text" placeholder="Name" />
                    </div>
                    <div class="md:flex-1 w-full">
                        <input class="appearance-none block w-full bg-primary text-background border border-border rounded-lg py-3 px-4 mb-3 leading-tight" type="email" placeholder="Email" />
                    </div>
                </div>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full">
                        <textarea class=" resize-y appearance-none block w-full bg-primary text-background border border-border rounded-lg py-3 px-4 mb-3 leading-tight h-56" id="message" placeholder="Message"></textarea>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <Button>Send</Button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
        </div>
        </Layout>
    );
}