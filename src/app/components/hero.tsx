import Link from "next/link";
import Navbar from "@/app/components/navbar";

export default function Hero() {
    return (
        <section className="w-full max-h-screen h-screen bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/hero.png')"
        }}>
            <Navbar noBackground={true} />
        <div className={"flex items-center justify-center flex-col h-full max-w-170 mx-auto p-2 md:p-0"}>
            <div className={"flex items-center justify-center mx-auto mb-30 flex-col gap-8"}>
                <h1 className={"text-white font-primary text-5xl md:text-6xl text-center font-bold"}>A Culinary Journey to Remember</h1>
                <p className={"text-white text-center text-sm font-primary font-light"}>Experience modern gastronomy in the heart of the city. Locally sourced ingredients, expertly crafted dishes, and unforgettable atmosphere.</p>

                <div className={"flex flex-row flex-wrap gap-4 mx-auto justify-center"}>
                    <Link href={"/menu"} className={"bg-white border-white border px-6 py-3 text-sm rounded-md font-bold"}>
                        View Menu
                    </Link>
                    <Link href={"/reservations"} className={"bg-none text-white px-6 py-3 border border-white text-sm rounded-md font-bold"}>
                        Reserve Now
                    </Link>
                </div>
            </div>



        </div>
        </section>
    )
}