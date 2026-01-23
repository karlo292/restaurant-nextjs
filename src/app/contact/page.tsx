import ContactForm from "@/app/components/contact-form";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Page() {
    return (
        <div className={"font-primary"}>
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    )
}