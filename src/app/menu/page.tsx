"use client";
import Navbar from "@/app/components/navbar";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";

export default function Page() {
    return (
        <div className={"font-primary"}>
            <Navbar />
            <Menu />
            <Footer />
        </div>
    )
}