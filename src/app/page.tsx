import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Dishes from "@/app/components/dishes";
import HomeReviews from "@/app/components/home-reviews";
import BookingForm from "@/app/components/booking-form";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className={"font-primary"}>
        <Hero />
        <Dishes />
        <HomeReviews />
        <BookingForm />
        <Footer />
    </div>
  );
}
