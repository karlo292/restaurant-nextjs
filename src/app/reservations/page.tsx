import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ReservationsForm from "@/app/components/reservations-form";

export default function Page() {
    return (
        <div className={"font-primary"}>
           <Navbar />
            <ReservationsForm />
           <Footer />
        </div>
    )
}