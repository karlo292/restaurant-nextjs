"use client";
import { Image } from "next/dist/client/image-component";
import Link from "next/dist/client/link";
import {useState} from "react";
import {FaBars, FaXmark} from "react-icons/fa6";


interface Link {
    name: string;
    href: string;
}

const links : Link[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Menu",
        href: "/menu"
    },
    {
        name: "Reservations",
        href: "/reservations"
    },
    {
        name: "Reviews",
        href: "/reviews"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]



export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='w-full border-b border-border'>
            <nav className="hidden md:flex w-full max-w-480 mx-auto px-4 h-20 bg-background flex-row justify-between items-center">
                <Logo />
                <div className={"gap-4 flex flex-row"}>
                    {links.map((link: Link) => {
                        return <Link className={"text-[16px] font-bold font-primary"} key={link.href} href={link.href}>{link.name}</Link>
                    })}
                </div>
                <Link href={"/reservations"} className={"bg-primary py-4 px-4 rounded-md text-[16px] hover:cursor-pointer text-white font-inter"}>
                    Book a table
                </Link>
            </nav>
            <nav className={"flex flex-col gap-4 md:hidden py-4 px-8"}>
                <div className={"flex flex-row justify-between items-center"}>
                    <Logo />
                    <div className={"p-3 rounded-md border-border border"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <FaBars className={`${isMobileMenuOpen && "hidden"} w-5 h-5`} />
                        <FaXmark className={`${!isMobileMenuOpen && "hidden"} w-5 h-5`} />
                    </div>
                </div>
                <div className={`border-b border-border w-full ${!isMobileMenuOpen ? "hidden" : ""}`} />

                <div className={`${!isMobileMenuOpen ? "hidden" : ""} gap-4 flex flex-col`}>
                    {links.map((link: Link) => {
                        return <Link className={"text-[16px] font-bold font-primary"} key={link.href} href={link.href}>{link.name}</Link>
                    })}
                </div>
                <Link href={"/reservations"} className={`bg-primary text-center py-4 px-4 rounded-md text-[16px] hover:cursor-pointer text-white font-inter ${!isMobileMenuOpen ? "hidden" : ""}`}>
                    Book a table
                </Link>
            </nav>
        </div>
    )
}

function Logo() {
    return (
        <div className={"flex flex-row gap-2 items-center "}>
            <Image alt={"Navbar Icon"} width={"32"} height={"32"} src={"/icon.png"} />
            <h1 className="font-bold text-2xl">Savoria</h1>
        </div>
    )
}