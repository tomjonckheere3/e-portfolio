import Head from "next/head"
import ContactForm from "../components/contact-form";
import ContactInfo from "../components/contact-info";
import PageTitle from "../components/page-title";

export default function Contact() {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Tom Jonckheere - Contact</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
            </Head>

            <main className="max-w-4xl mx-auto mt-8 md:mt-16 antialiased">
                <PageTitle pageTitle="Contact" />
                <ContactInfo />
                <ContactForm />
            </main>
        </div>
    )
}
