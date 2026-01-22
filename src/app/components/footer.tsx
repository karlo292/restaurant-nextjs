import {Image} from "next/dist/client/image-component";
import Link from "next/dist/client/link";

export default function Footer() {
    return (
        <footer>
            <div className={"max-w-300 w-full mx-auto px-4 py-6 xl:px-0"}>
                <div className={"flex flex-col gap-4 sm:flex-row justify-between"}>
                    <div>
                        <div className={"flex flex-row gap-2 items-center "}>
                            <Image alt={"Navbar Icon"} width={"32"} height={"32"} src={"/icon.png"} />
                            <h2 className="font-bold text-2xl">Savoria</h2>
                        </div>
                        <p className={"max-w-101.25 mt-2 text-muted-foreground text-[15px]"}>Experience the art of dining. Located in the heart of the Food District.</p>
                    </div>
                    <div className={"grid gap-12 grid-cols-2"}>
                        <div className={"flex flex-col gap-1 text-muted-foreground"}>
                            <h3 className={"text-muted-foreground font-primary font-semibold"}>Explore</h3>
                            <Link className={"text-muted-foreground"} href={"/menu"}>Menu</Link>
                            <Link className={"text-muted-foreground"} href={"/reservations"}>Reservations</Link>
                            <Link className={"text-muted-foreground"} href={"/reviews"}>Reviews</Link>
                        </div>
                        <div className={"flex flex-col gap-1 text-muted-foreground"}>
                            <h3 className={"text-muted-foreground font-primary font-semibold"}>Connect</h3>
                            <Link className={"text-muted-foreground"} href={"https://instagram.com"}>Instagram</Link>
                            <Link className={"text-muted-foreground"} href={"https://facebook.com"}>Facebook</Link>
                            <Link className={"text-muted-foreground"} href={"/contact"}>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col sm:flex-row max-w-295 items-center mt-4 justify-between"}>
                    <p className={"text-center text-black text-[13px] mt-6"}>© 2026 Savoria. All rights reserved.</p>
                    <div className={"flex gap-3"}>
                        <Link className={"text-black"} href={"https://example.com"}>Privacy Policy</Link>
                        <Link className={"text-black"} href={"https://example.com"}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}