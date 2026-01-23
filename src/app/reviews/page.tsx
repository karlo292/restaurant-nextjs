"use client";
import { Reviews } from "@/app/components/reviews";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Reviews />
            <Footer />
        </div>
    )
}