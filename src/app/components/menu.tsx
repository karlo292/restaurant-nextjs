"use client";

import {useState} from "react";
import {Image} from "next/dist/client/image-component";
import Link from "next/dist/client/link";


interface MenuItem {
    name: string;
    description: string;
    tags: string;
    price: string;
    image: string;
}

const menu: Record<string, MenuItem[]> = {
    "Starters": [
        {
            name: "Heirloom Burrata 1",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        },
        {
            name: "Heirloom Burrata 2",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        }
    ],
    "Main Courses": [
        {
            name: "Heirloom Burrata 3",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        },
        {
            name: "Heirloom Burrata 4",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        }
    ],
    "Desserts": [
        {
            name: "Heirloom Burrata 5",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        },
        {
            name: "Heirloom Burrata 6",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        }
    ],
    "Wine": [
        {
            name: "Heirloom Burrata 7",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        },
        {
            name: "Heirloom Burrata 8",
            description: "Local creamy burrata, kaleidoscope tomatoes, genovese basil pesto, aged balsamic reduction.",
            tags: "Vegetarian, Gluten-Free",
            price: "$18",
            image: "/menu/burrata.png"
        }
    ]
}


export default function Menu() {

    const [selectedCategory, setSelectedCategory] = useState<string>(Object.keys(menu)[0]);

    return (
        <section className={"p-4 xl:p-0"}>
            <div className={"flex flex-row mt-20 justify-between max-w-300 mx-auto"}>
                {/* Categories */}
                <div className={"w-60 hidden xl:block sticky top-20 self-start"}>
                    <h3 className={"text-muted-foreground font-semibold"}>CATEGORIES</h3>

                    <div className={"flex flex-col mt-5"}>
                        {Object.keys(menu).map((category) => {
                            return (
                                <Link
                                    href={"#" + category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`text-start w-60 hover:cursor-pointer border-r-3 py-3.5 ${category == selectedCategory ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary/80 border-transparent"}`} key={category}>
                                    {category}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className={"w-full max-w-212 mx-auto"}>
                    {/* Title */}
                    <h1 className={"text-black font-bold text-5xl"}>Seasonal Menu</h1>
                    <p className={"text-muted-foreground text-[15px] mt-5"}>We pride ourselves on working with local farmers and purveyors to source the freshest ingredients. Our menu changes daily based on availability.</p>
                    {/* Mobile Categories */}
                    <div className={"flex flex-row gap-4 xl:hidden"}>
                        {Object.keys(menu).map((category) => {
                            return (
                                <Link
                                    href={"#" + category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`text-start whitespace-nowrap hover:cursor-pointer border-b-3 pb-2 mt-8 ${category == selectedCategory ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary/80 border-transparent"}`} key={category}>
                                    {category}
                                </Link>
                            )
                        })}
                    </div>
                    {/* Menu Items */}
                    {Object.keys(menu).map((category) => {
                        return (
                            <div key={category}>
                                <div className={"mt-10 flex"}>
                                    <h2 id={category} className={"text-black text-2xl font-bold border-b-primary border-b-3 pb-4"}>{category}</h2>
                                </div>
                                <div className={"mt-5"}>
                                    {menu[category].map((item: MenuItem, index: number, arr: MenuItem[]) => {
                                        const isLast = index === arr.length - 1;
                                        const isFirst = index === 0;
                                        return (
                                            <div key={item.name}>
                                                <MenuItem item={item} isFirst={isFirst} />
                                                {!isLast && <div className={"h-px rounded-sm bg-border w-full"} />}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function MenuItem({item, isFirst}: {item: MenuItem, isFirst?: boolean}) {
    return (
        <div className={`w-full flex flex-col sm:flex-row  ${isFirst ? "pb-6 pt-4" : "py-6"}`}>
            <Image src={item.image} width={140} height={140} alt={item.name} />
            <div className={"w-full sm:px-4"}>
                <div className={"flex w-full mt-2 sm:mt-0 flex-row justify-between"}>
                    <h3 className={"font-semibold text-lg text-black"}>{item.name}</h3>
                    <h3 className={"font-semibold text-lg text-black"}>{item.price}</h3>
                </div>
                <p className={"text-muted-foreground text-[15px] mt-4 max-w-125"}>{item.description}</p>
                <div className={"flex flex-row gap-2"}>
                    {item.tags.split(", ").map((tag) => {
                        return (
                            <span key={tag} className={"text-[13px] border-border border mt-2 px-2 py-1 rounded-xl bg-secondary font-semibold text-secondary-foreground"}>{tag}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}