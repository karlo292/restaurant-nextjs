import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full max-h-175 h-screen bg-cover bg-center" style={{
            backgroundImage: "url('/hero.png')"
        }}>
        <div className={"flex items-center justify-center gap-8 flex-col h-full max-w-170 mx-auto p-2 md:p-0"}>
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
        </section>
    )
}