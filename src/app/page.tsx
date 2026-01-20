import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Dishes from "@/app/components/dishes";
import HomeReviews from "@/app/components/home-reviews";
import BookingForm from "@/app/components/booking-form";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Dishes />
        <HomeReviews />
        <BookingForm />
    </div>
  );
}
